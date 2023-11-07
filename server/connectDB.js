import mysql from 'mysql2'

const connectDB = async() =>{
    const pool = mysql.createPool({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DB,
        waitForConnections: true,
        connectionLimit: 10
    })

    module.exports = {
        query: (sql, values) => {
            return new Promise((resolve, reject) => {
                pool.getConnection((err, connection) =>{
                    if(err){
                        reject(err)
                        return
                    }
                    connection.query(sql, values, (error, results) =>{
                        connection.release()
                        if(error){
                            reject(error)
                        }else{
                            resolve(results)
                        }
                    })
                })
            })
        }
    }
}

export default connectDB


// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'sachin',
//     password: 'your_password',
//     database: 'your_database',
//     waitForConnections: true,
//     connectionLimit: 10, // Adjust as needed
//     queueLimit: 0, // No limit on the number of queued queries
//   });
  
//   // Now you can get a connection from the pool and execute queries
//   pool.getConnection((err, connection) => {
//     if (err) {
//       console.error('Error getting MySQL connection:', err);
//       return;
//     }
  
//     // Use the connection for your queries
//     connection.query('SELECT * FROM your_table', (error, results, fields) => {
//       if (error) {
//         console.error('Error executing MySQL query:', error);
//       } else {
//         console.log('Query results:', results);
//       }
  
//       // Release the connection back to the pool when done
//       connection.release();
//     });
//   });