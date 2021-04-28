<template>
    <ul v-show="this.topics.length" :id="id" :class="['topics', this.topic ? 't-' + this.topic : 'c-' + this.category]">
        <li v-for="topic in this.topics">
            <a :href="`${baseUrl}/t/${topic.id}`" target="_blank" class="post">
                <div class="topic-img">
                    <img
                        v-if="topic.image_url || showMeta && topic.meta" alt=""
                        :src="topic.image_url || `${baseUrl}${topic.meta.details.created_by.avatar_template.replace('{size}',320)}`">
                </div>
                <div class="topic-title">{{ topic.title }}</div>
                <div class="topic-excerpt">{{ getExcerpt(topic) }}</div>
            </a>
            <a
                v-if="showMeta && topic.meta" :href="`${baseUrl}/u/${topic.meta.details.created_by.username}`"
                target="_blank" class="author">
                <img :src="`${baseUrl}${topic.meta.details.created_by.avatar_template.replace('{size}',50)}`" alt="">
                <div>
                    {{ topic.meta.details.created_by.name || topic.meta.details.created_by.username }}
                </div>
                <time :datetime="topic.meta.created_at">
                    {{ new Date(topic.meta.created_at).toLocaleDateString() }}
                </time>
            </a>
        </li>
    </ul>
</template>
<script>
    export default {
        props: {
            id: { type: String, default: null },
            category: { type: String, default: null },
            count: { type: Number, default: 1 },
            start: { type: Number, default: 0 },
            pinned: { type: Boolean, default: false },
            baseUrl: { type: String, default: 'https://forum.aeternity.com' },
            topic: { type: String, default: null },
            tag: { type: String, default: null },
            showMeta: { type: Boolean, default: false },
        },
        data() {
            return {
                topics: [],
            };
        },
        methods: {
            async fetchData() {
                let pinned = this.pinned;
                if (this.category) {
                    let topics = await fetch(`${this.baseUrl}/c/${this.category}.json`)
                        .then(response => response.json())
                        .then(data => data['topic_list']['topics'])
                        .catch(() => [])
                    ;
                    this.topics = [...topics]
                        .filter(topic => topic.visible && topic.pinned === pinned)
                        .slice(this.start, this.count);
                }
                if (this.tag) {
                  let topics = await fetch(`${this.baseUrl}/tag/${this.tag}.json`)
                    .then(response => response.json())
                    .then(data => data['topic_list']['topics'])
                    .catch(() => [])
                  ;
                  this.topics = [...topics]
                    .filter(topic => topic.visible && topic.pinned === pinned)
                    .slice(this.start, this.count);
                }
                if (this.topic) {
                    let topic = await fetch(`${this.baseUrl}/t/${this.topic}.json`)
                        .then(response => response.json())
                        .catch(() => [])
                    ;
                    this.topics.push({
                        id: topic.id,
                        title: topic.title,
                        image_url: null,
                        excerpt: null,
                        pinned_at: topic.pinned_at,
                        last_posted_at: topic.last_posted_at,
                        posters: topic.posters,
                        pinned: topic.pinned,
                    });
                }
                if (this.showMeta) {
                    this.topics = await Promise.all(this.topics.map(topic => this.getMeta(topic)));
                }
            },
            async getMeta(topic) {
                let meta = await fetch(`${this.baseUrl}/t/${topic.id}/1.json`)
                    .then(response => response.json())
                    .then((result) => result)
                    .catch(() => [])
                ;
                return Object.assign(topic, { meta: meta });
            },
            getExcerpt(topic) {
                if (!this.showMeta || !topic.meta) {
                    return topic.excerpt;
                }
                return topic.meta.post_stream.posts[0].cooked
                    .replace(/(<([^>]+)>)/g, '')
                    .replace(/([.!?\r\n]).*/g, '$1')
                    .substr(0, 100).trim();
            },
        },
        mounted() {
            this.$nextTick(() => this.fetchData());
        },
    };
</script>
