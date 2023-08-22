-- Menampilkan: Kota Customer, Nama Customer, No.Penjualan, Tanggal, Nama Sales, Kota Sales, Total Penjualan, Status Pembayaran [SUDAH BAYAR / BELUM] 						
-- 	> Status Pembayaran = SUDAH BAYAR jika trpenjualan.tanggalbayar tidak null, BELUM BAYAR jika trpenjualan.tanggalbayar null.					
-- 	> Total Penjualan = jumlah dari detail penjualan (qtyjual x hargasatuan)					
-- 	> Penjualan yang sudah dibatalkan (status penjualan.batal = Y) TIDAK BOLEH diikutkan					
-- 	> Data diurutkan berdasarkan kota customer, nama customer, no.transaksi					
-- 	> Jika Data Kota tidak ada (null), maka nama kota tersebut ditampilkan 'TIDAK ADA DATA'					

SELECT mscustomer.cus_nm as nama_customer, trpenjualan.jul_id as no_penjualan,trpenjualan.jul_tanggaljual as tanggal_penjualan,mssalesman.sal_nm as nama_sales, mskota.kta_nm as kota_sales  FROM trpenjualan
    LEFT JOIN mssalesman ON mssalesman.sal_id = trpenjualan.jul_sal_id 
    LEFT JOIN mskota ON mskota.kta_id = mssalesman.sal_kta_id
    LEFT JOIN mscustomer on mscustomer.cus_id = trpenjualan.jul_cus_id LIMIT 5;
    LEFT JOIN  ON mssalesman.sal_id = trpenjualan.jul_sal_id;
