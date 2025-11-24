module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define('Komik', {
        id: {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
        },
        title: {
        type: DataTypes.STRING,   
        }, 
        description: {
        type: DataTypes.STRING,
        },
        author: {
        type: DataTypes.STRING,
        alloowNull: false,
        },
        imageType: DataTypes.STRING,
        imageName: DataTypes.STRING,
        imageData: DataTypes.BLOB('long'),
    },
    {
        tableName: 'komik',
    }
    );
    return Komik; 
}