(this["webpackJsonpappas-1"]=this["webpackJsonpappas-1"]||[]).push([[0],[,,,,,,,function(e,a,n){e.exports=n(19)},,,,,function(e,a,n){},function(e,a,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(6),c=n.n(o),i=(n(12),n(13),n(14),n(1)),s=n(2),l=n(3),p=n(4),m=(n(15),t.Component,n(16),function(e){Object(p.a)(n,e);var a=Object(l.a)(n);function n(){return Object(i.a)(this,n),a.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e,a=this.props.parametrai,n=a.id,t=a.name,o=a.type,c=a.base_experience;return e=n>9&&n<100?"0"+n:n<10?"00"+n:n,r.a.createElement("div",{className:"pokemonCard Pokemon-hover"},r.a.createElement("h1",{className:"PokemonCard-title"},t),r.a.createElement("img",{className:"imgPokemon",src:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/".concat(e,".png")}),r.a.createElement("p",{className:"PokemonCard-data"},"Type: ",o),r.a.createElement("p",{className:"PokemonCard-data"},"EXP: ",c))}}]),n}(t.Component)),u=(n(17),function(e){Object(p.a)(n,e);var a=Object(l.a)(n);function n(){return Object(i.a)(this,n),a.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.pokemon;return console.log(e),console.log(this.props),r.a.createElement("div",null,r.a.createElement("div",{className:"Pokedex"},e.map((function(e){return r.a.createElement(m,{parametrai:e})}))))}}]),n}(t.Component));u.defaultProps=[{id:4,name:"Charmander",type:"fire",base_experience:62},{id:7,name:"Squirtle",type:"water",base_experience:63},{id:11,name:"Metapod",type:"bug",base_experience:72},{id:12,name:"Butterfree",type:"flying",base_experience:178},{id:25,name:"Pikachu",type:"electric",base_experience:112},{id:39,name:"Jigglypuff",type:"normal",base_experience:95},{id:94,name:"Gengar",type:"poison",base_experience:225},{id:133,name:"Eeevee",type:"normal",base_experience:65}];var d=u,h=(n(18),function(e){Object(p.a)(n,e);var a=Object(l.a)(n);function n(){return Object(i.a)(this,n),a.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){for(var e=[],a=0;a<8;a++)e.push(this.props[a]);var n=[];console.log(e.length);for(var t=0;t<4;){var o=Math.floor(Math.random()*e.length),c=e.splice(o,1)[0];n.push(c),t++}console.log(e),console.log(n);var i=0,s=0;return n.map((function(e){return i+=e.base_experience})),console.log("suma1 "+i),e.map((function(e){return s+=e.base_experience})),console.log("suma2 "+s),r.a.createElement("div",null,r.a.createElement("h1",null,"Pokedex"),i>s?r.a.createElement("h2",{style:{color:"green"}},"Laimetojas"):i<s?r.a.createElement("h2",{style:{color:"red"}},"Pralaimejes"):r.a.createElement("h2",{style:{color:"blue"}},"Lygiosios"),r.a.createElement(d,{pokemon:n}),r.a.createElement("h2",{className:"pokemonGame-VS"},"VS"),i<s?r.a.createElement("h2",{style:{color:"green"}},"Laimetojas"):i>s?r.a.createElement("h2",{style:{color:"red"}},"Pralaimejes"):r.a.createElement("h2",{style:{color:"blue"}},"Lygiosios"),r.a.createElement(d,{pokemon:e}))}}]),n}(t.Component));h.defaultProps=[{id:4,name:"Charmander",type:"fire",base_experience:62},{id:7,name:"Squirtle",type:"water",base_experience:63},{id:11,name:"Metapod",type:"bug",base_experience:72},{id:12,name:"Butterfree",type:"flying",base_experience:178},{id:25,name:"Pikachu",type:"electric",base_experience:112},{id:39,name:"Jigglypuff",type:"normal",base_experience:95},{id:94,name:"Gengar",type:"poison",base_experience:225},{id:133,name:"Eeevee",type:"normal",base_experience:65}];var f=h;var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.60f65b9c.chunk.js.map