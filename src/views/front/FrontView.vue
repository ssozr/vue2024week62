<template>
    <RouterView></RouterView>
    <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About</RouterLink>|
        <RouterLink to="/articles">文章列表</RouterLink> |
        <RouterLink to="/products">課程列表</RouterLink>|
        <RouterLink to="/cart">購物車</RouterLink> |
        <RouterLink to="/order">訂單</RouterLink>|
        <RouterLink to="/login">登入後台</RouterLink>
    </nav>
</template>
