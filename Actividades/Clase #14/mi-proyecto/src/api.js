const apiURL = "https://jsonplaceholder.typicode.com/user";

export const obtenerUsuarios = async () => {
    try {
        const respuesta = await fetch(apiURL);
        if (!respuesta.ok) throw Error ("Error de red");
        return await respuesta.json();
    }catch (error){
    console.log("error al obtener los usuarios ")
    return[];
    }
};