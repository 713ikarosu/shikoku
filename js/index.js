const vm = new Vue({
  el: '#belongings',
  data: {
    itemList: [
      {name:"お金", checked: false},
      {name:"スマホ", checked: false},
      {name:"免許書", checked: false},
      {name:"充電系", checked: false},
      {name:"風呂グッズ", checked: false},
      {name:"おもしろいなにか", checked: false},
    ],
    add: ""
  },
  mounted() {
    if (localStorage.getItem('item')) {
      try {
          this.itemList = JSON.parse(localStorage.getItem('item'));
      } catch(e) {
          localStorage.removeItem('item');
      }
    }
  },
  methods: {
    addItem() {
      if(this.add) {
        this.itemList.push({
          name: this.add,
          checked: false
        });
        this.add = "";
      }
      this.saveItem();
    },
    saveItem() {
      const parsed = JSON.stringify(this.itemList);
      localStorage.setItem('item', parsed);
    }
  },
  template: `
    <ul>
      <li v-for="item in itemList">
       <label>
          <input type="checkbox" v-model="item.checked" @change="saveItem">
          {{ item.name }}
        </label>
      </li>
      <input type="text" v-model="add" @keyup.enter="addItem" placeholder="項目を追加">
    </ul>
  `,
});


const vm_day1 = new Vue({
  el: '#day1',
  data: {
    taskList: {
      "〜19:00": "有明周辺集合",
      "〜19:30": "フェリー出港",
      "19:30〜": "飲酒等",
    },
  },
  methods: {},
  template: `
    <ul>
      <li v-for="(item, key) in taskList">
       <label class="time">
          {{ key }}
        </label>
        <label class="list-item">
          {{ item }}
        </label>
      </li>
    </ul>
  `,
});

const vm_day2 = new Vue({
  el: '#day2',
  data: {
    taskList: {
      "〜13:20": "徳島は沖洲へ到着",
      "〜13:30": "車獲得 or 街を散策",
      "〜20:00": "高松あたりの宿到着？",
      "20:00〜": "飲酒等",
    },
  },
  methods: {},
  template: `
  <ul>
  <li v-for="(item, key) in taskList">
   <label class="time">
      {{ key }}
    </label>
    <label class="list-item">
      {{ item }}
    </label>
  </li>
</ul>
  `,
});

const vm_day3 = new Vue({
  el: '#day3',
  data: {
    taskList: {
      "10:00": "ホテルチェックアウト",
      "〜14:00": "高松観光",
      "〜15:30": "レンタカー返却",
      "〜16:30": "飛行機",
      "〜17:55": "成田着予定",
    },
  },
  methods: {},
  template: `
  <ul>
  <li v-for="(item, key) in taskList">
   <label class="time">
      {{ key }}
    </label>
    <label class="list-item">
      {{ item }}
    </label>
  </li>
</ul>
  `,
});

const vm_link = new Vue({
  el: '#link-area',
  data: {
    links: [
      {
        name: "四国温泉情報",
        link: "https://icotto.jp/presses/5606",
      },{
        name: "こんぴら温泉 - 高松の温泉",
        link: "https://icotto.jp/tourspots/31388",
      },{
        name: "小豆島温泉 - 高松の温泉",
        link: "https://icotto.jp/tourspots/58750",
      },{
        name: "アオアヲ ナルト リゾート - なるとあたりの温泉リゾート",
        link: "https://icotto.jp/presses/17262?lid=hotel_detail_press",
      },{
        name: "NAVITIME",
        link: "https://www.navitime.co.jp/",
      },

    ]
  },
  template: `
    <ul class="link-area">
      <li v-for="item in links">
        <a :href="item.link">{{item.name}}</a>
      </li>
    </ul>
  `,
});
