<template>
    <div>
        <h1>App.js</h1>
        <ul>
            <li><router-link to="/">Go to Home</router-link></li>
            <li><router-link to="/bar">Go to bar</router-link></li>
            <li><router-link to="/baz">Go to baz</router-link></li>
            <li><router-link to="/foo">Go to foo</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>
