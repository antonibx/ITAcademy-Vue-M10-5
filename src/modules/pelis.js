export default {
    namespaced: true,
    state: {
        pelis: [],
    },
    mutations:{
        omplirPelis(state, pelisAction) {
            state.pelis = pelisAction;
        }
    },
    actions:{
        obtenirPelis: async function({commit}, filtre){
            const data = await (await fetch('MOCK_DATA.json')).json();
            let pelicules = [];
            switch(filtre){
                case 'disp':
                    data.forEach(element => {if (element.disponibilitat) {pelicules.push(element);}});
                    break;
                case 'noDisp':
                    data.forEach(element => {if (!element.disponibilitat) {pelicules.push(element);}});
                    break;
                default:
                    pelicules = data;
            }
            commit('omplirPelis', pelicules);
        },
        cercaPelis: async function({commit}){
            let input = (document.getElementById("cerca").value).toLowerCase();
            let disp = document.getElementById("dispcheck").checked;
            let nodisp = document.getElementById("nodispcheck").checked;
            const data = await (await fetch('MOCK_DATA.json')).json();
            let pelicules = [];
            data.forEach(element => {
                if (element.titol.toLowerCase().includes(input) && ((!element.disponibilitat && nodisp) || (element.disponibilitat && disp))) {
                    pelicules.push(element);
                }
            });
            if(pelicules.length==0 && document.getElementById("alert").classList.contains('invisible')){
                document.getElementById("alert").classList.remove('invisible');
                document.getElementById("alert").classList.add('visible');
            } else if (pelicules.lenght!=0 && document.getElementById("alert").classList.contains('visible')){
                document.getElementById("alert").classList.remove('visible');
                document.getElementById("alert").classList.add('invisible');
            }
            commit('omplirPelis', pelicules);
        }
    }
};