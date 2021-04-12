// import connection
const db = require("./ConnectionDB");

// mendapatkan semua data siswa
const getAllSiswa = async () => {
    
    return await db
        .from("siswa")
        .select("*")
        .then((rows) => {
            console.log(rows);
            return rows;
    });
};

// menambahkan absensi
const storeAbsensi = async (data) => {
    return await db
        .from("siswa")
        .insert({
            name: data.name,
            email: data.email,
            phone: data.phone,
            batch: data.batch
    })
    .then((rows) => {
        return rows;
    })
    .catch((err) => console.log(err));
}

// menghapus absensi
const deleteAbsensi = async (data) => {

    return await db
        .from("siswa")
        .where("id", data.id)
        .del()
        .then((rows) => {
            console.log(rows);
            return rows;
    });
}


//export semua function
module.exports = { getAllSiswa, storeAbsensi, deleteAbsensi };