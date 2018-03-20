<template>
    <div id="championmastery">
        <svg width="1020" height="500"></svg>
    </div>
</template>
<script>
    // import d3 from 'd3';
    // import * as d3 from 'd3';
    const d3 = require("d3");
    import axios from 'axios';

    export default {
        name: 'PlayedChampions',

        props: ['championmastery'],

        data() {
            return {
                championList : []
            }
        },

        mounted() {
            let width = 720;
            let height = 500;
            let nodes = d3.range(140).map((d) => {return {radius: Math.random() * 50}}) //champion-list length is 140

            let simulation = d3.forceSimulation(nodes)
                .force('charge', d3.forceManyBody().strength(-40))
                .force('center', d3.forceCenter(width/2, height/2))
                .force('collision', d3.forceCollide().radius((d) => d.radius))
                .on('tick', ticked)

            function ticked() {
                let u = d3.select('#championmastery svg')
                    .selectAll('circle')
                    // .selectAll('image')
                    .data(nodes)
                u.enter()
                    .append('circle')
                    // .append('image')
                    // .attr('xlink:href', 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Nunu.png')
                    .attr('r', (d) => d.radius)
                    .merge(u)
                    .attr('cx', (d) => d.x)
                    .attr('cy', (d) => d.y)

                u.exit().remove()
            }
   
        }
    }

</script>
<style>
    circle {
        fill: #00001a;
    }
</style>