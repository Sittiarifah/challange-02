const dataPenjualanPakAldi = [
    {
        namaProduct: 'Sepatu Futsal Nike Vapor Academy 8',
        hargaSatuan: 760000,
        kategori: 'Sepatu Sport',
        totalTerjual: 90,
    },
    {
        namaProduct: 'Sepatu Warrior Tristan Black Brown High',
        hargaSatuan: 960000,
        kategori: 'Sepatu Sneaker',
        totalTerjual: 37,
    },
    {
        namaProduct: 'Sepatu Warrior Tristan Maroon High',
        hargaSatuan: 360000,
        kategori: 'Sepatu Sneaker',
        totalTerjual: 90,
    },
    {
        namaProduct: 'Sepatu Warrior Rainbow Tosca Cordury',
        hargaSatuan: 120000,
        kategori: 'Sepatu Sport',
        totalTerjual: 90,
    }
]


function hitungTotalPenjualan(dataPenjualan) {
    return dataPenjualan.reduce((a, b) => {
        return {totalTerjual: a.totalTerjual + b.totalTerjual}
    })
}

console.log(hitungTotalPenjualan(dataPenjualanPakAldi))