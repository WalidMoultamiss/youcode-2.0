export const header = (data) => {
    let user =data
    console.log("hello"); 
    return user ?
        (`
        <div class="bg-red-300 text-black">
            <h1>Heaaaaaaaaaaaader ${user[0].email}</h1>
        </div>
    `) 
    :(`
    <div class="bg-red-300 text-black">
        <h1>Heaaaaaaaaaaaader </h1>
    </div>
`)
}