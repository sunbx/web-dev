<template>
    <header :class="{scroll: scroll > 0}">
        <section :class="{'main-nav': true, active: navActive}">
            <div class="logo">
                <a :href="$withBase('/')">
                    <img src="../../../img/logo.svg" alt="Aeternity">
                </a>
            </div>
            <nav class="pages">
                <button v-on:click="toggleNav"></button>
                <ul class="nav-items" v-on:click.stop="toggleNav">
                    <li class="nav-item">
                        <a href="#sophia">Sophia</a>
                    </li>
                    <li class="nav-item">
                        <a href="#developer_tools">Developers</a>
                    </li>
                    <li class="nav-item">
                        <a href="#interfaces">Clients</a>
                    </li>
                    <li class="nav-item">
                        <a href="#get_tokens">Get AE</a>
                    </li>
                    <li class="nav-item">
                        <a href="#community">Community</a>
                    </li>
                    <li class="nav-item">
                        <a href="#team_members">Team</a>
                    </li>
                    <li class="nav-item">
                        <a href="#news">News</a>
                    </li>
                    <li class="nav-item">
                        <a href="https://raw.githubusercontent.com/keypair/white-paper/master/aeternity-whitepaper.pdf" target="_blank">Whitepaper</a>
                    </li>
                    <li class="nav-item right">
                        <a href="https://forum.aeternity.com" target="_blank">Forum</a>
                    </li>
                    <li class="social">
                        <a href="https://github.com/aeternity" target="_blank">
                            <img src="../../../img/Social_GitHub.svg" alt="">
                        </a>
                        <a href="https://forum.aeternity.com" target="_blank">
                            <img src="../../../img/Social_Forum.svg" alt="">
                        </a>
                        <a href="https://blog.aeternity.com" target="_blank">
                            <img src="../../../img/Social_Medium.svg" alt="">
                        </a>
                        <a href="https://telegram.me/aeternity" target="_blank">
                            <img src="../../../img/Social_Telegram.svg" alt="">
                        </a>
                        <a href="https://www.facebook.com/aeternityproject/" target="_blank">
                            <img src="../../../img/Social_Facebook.svg" alt="">
                        </a>
                        <a href="https://twitter.com/aeternity" target="_blank">
                            <img src="../../../img/Social_Twitter.svg" alt="">
                        </a>
                    </li>
                </ul>
            </nav>
            <div :class="{'lang-switcher': true, active: langActive}">
                <button type="button" class="lang-current" v-on:click="toggleLang">ENG</button>
                <div class="lang-menu">
                    <ul class="lang-items">
                        <li class="lang-item">
                            <a class="lang-link" href="#" onclick="return false">English</a>
                        </li>
                        <li class="lang-item">
                            <a class="lang-link" onclick="return false">Español</a>
                        </li>
                        <li class="lang-item">
                            <a class="lang-link" onclick="return false">Русский</a>
                        </li>
                        <li class="lang-item">
                            <a class="lang-link" onclick="return false">中文 (简体)</a>
                        </li>
                        <li class="lang-item">
                            <a class="lang-link" onclick="return false">日本語</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </header>
</template>
<script>
    export default {
        props: {
            'scroll': 0,
        },
        data() {
            return {
                onTop: true,
                navActive: false,
                langActive: false,
            };
        },
        methods: {
            toggleNav: function () {
                this.navActive = !this.navActive;
            },
            toggleLang: function () {
                this.navActive = !this.navActive;
            },
        },
    };
</script>
