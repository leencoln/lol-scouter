<template>
    <div id="header">
        <div id="logo">
            <a href="#">LOL-scouter<br>Search Your Stack</a>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Header'
    }
</script>
<style>
    #logo {
        margin: 50px auto;
        text-align: center;
    }

    #logo a {
        text-decoration: none;
        transform: perspective(2.5em) rotateX(15deg) scaleY(0.8);
        transition: all 0.5s;
        display: inline-block;
        text-align: center;
        text-transform: uppercase;
        font-size: 75px;
        font-weight: 700;
        font-family: 'Exo 2';
        line-height: 0.8;
        color: #fbd62a;
        text-shadow: 0 -1px 15px rgba(0, 0, 0, 0.9), 0 1px 0 #7f6303, 0 3px 0 #846703, 0 5px 0 #896b03, 0 7px 0 #8e6f03, 0 9px 0 #937203, 0 6px 50px rgba(252, 223, 92, 0.8);
    }

    #logo a:first-line {
        font-size: 0.8em;
    }

    #logo a:hover {
        transform: perspective(8em) rotateX(11deg) scale(1.2);
        text-shadow: 0 -1px 15px black, 0 1px 0 #7f6303, 0 2px 0 #846703, 0 0px 0 #896b03, 0 1px 0 #8e6f03, 0 2px 0 #937203, 0 2px 30px rgba(252, 223, 92, 0.6);
    }

</style>