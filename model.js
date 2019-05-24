module.exports = {
	getAll : function(connection , limit, offset , cb) {
		connection.query(
			{
				sql : `SELECT id_barang, nama_barang, harga_beli, harga_jual FROM barang LIMIT ${limit} OFFSET ${offset}`,
			}, 
		function (error, results, fields) {
			if (error) {
				var rs = {
					'success' 	: false,
					'message'	: error,
					'time'		: `grab data at ${Date()}`,
					'data'		: null,
					'status'	: 500
				}
			}else{
				if (results.length === 0) {
					var rs = {
						'success' 	: false,
						'message'	: `data not found`,
						'time'		: `grab data at ${Date()}`,
						'data'		: results,
						'status'	: 404
					}
				}else{
					var rs = {
						'success' 	: true,
						'message'	: `success grab data`,
						'time'		: `grab data at ${Date()}`,
						'data'		: results,
						'status'	: 200 
					}
				}
			}

			return cb(rs);
		});
	}

}