var doe=new Vue({
    el:'#app',
    data:{
        tabId:1,
        num:'',
        seen:true,
        list:'',
        arr:[
            {num:1,Til:'沁园春',Cot:'北国风光,千里冰封。万里雪飘。望长城内外，惟余莽莽。大河上下顿时滔滔...'},
        ],
        ars:{
            Til:'',Cot:'',num:''
        },  
        sc:'删除此笔记',
        xg:'修改此笔记',
        sa:'保存到我的笔记',
        remnant:0,
        arr1:[
            {num:1,Til:'dwad',Cot:'dwd'}
        ]
    },
    methods:{
        snav:function(){
            
        },
        add:function(){
            this.ars.Cot=_.truncate(this.ars.Cot,{'length':36})
            this.arr.push(this.ars)
                this.ars={
                Til:'',Cot:''
            }
            
                
        },
        sav:function(){
            this.ars.Cot=_.truncate(this.ars.Cot,{'length':36})
            this.arr1.push(this.ars)
                this.ars={
                Til:'',Cot:''
            } 
        },
        delt:function(e){
            this.arr.splice(e,1)
        },
        rev:function(e){
          console.log(this.arr[e].Til)
          this.ars=this.arr[e]
        },
        descInput:function(){
            var txtVal=this.ars.Cot.length;
            this.remnant=txtVal;
        }
    }
})