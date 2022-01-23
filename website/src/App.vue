<template>
  <v-app id="inspire">
    <v-app-bar
        app
        color="white"
        flat
    >
      <v-avatar
          :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
          size="32"
      ></v-avatar>

      <v-tabs
          centered
          class="ml-n9"
          color="grey darken-1"
      >
        <v-tab
            v-for="link in links"
            :key="link"
        >
          {{ link }}
        </v-tab>
      </v-tabs>

      <v-avatar
          class="hidden-sm-and-down"
          color="grey darken-1 shrink"
          size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>

          <v-col
              cols="12"
              sm="12"
          >
            <v-sheet
                min-height="70vh"
                rounded="lg"
            >
              <div id="hydrograph" />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import hydropgraph from '@d3-geology/hydrograph';
import * as d3 from 'd3';

export default {
  data: () => ({
    links: [
      'Charts'
    ],
  }),
  mounted() {
    this.generateCharts();
  },
  methods: {
    generateCharts () {
      const w = 800;
      const h = 600;
      const margin = 50;

      const svg = d3
          .select("#hydrograph")
          .append("svg")
          .attr("width", w + (margin * 2))
          .attr("height", h + (margin * 2))
          .append('g')
          .attr('transform', 'translate(' + margin + ',' + margin + ')');

      hydropgraph(svg, data, w, h, margin);
    }
  }

}

const data = {
  data: [
    {
      name: '122223/Q3',
      color: '#e41a1c',
      data: [
        {
          date: new Date('1998-01-01T00:00:00'),
          value: 139
        },
        {
          date: new Date('1999-01-01T00:00:00'),
          value: 142.5
        },
        {
          date: new Date('2000-01-01T00:00:00'),
          value: 140.3
        },
        {
          date: new Date('2001-01-01T00:00:00'),
          value: 140.3
        },
        {
          date: new Date('2002-01-01T00:00:00'),
          value: 144
        },
      ]
    },
    {
      name: '122223/Q4',
      color: '#377eb8',
      data: [
        {
          date: new Date('1998-01-01T00:00:00'),
          value: 140
        },
        {
          date: new Date('1999-01-01T00:00:00'),
          value: 136.5
        },
        {
          date: new Date('2000-01-01T00:00:00'),
          value: 138.4
        },
        {
          date: new Date('2001-01-01T00:00:00'),
          value: 139.3
        },
        {
          date: new Date('2002-01-01T00:00:00'),
          value: 149.3
        },
      ]
    }
  ]
};
</script>