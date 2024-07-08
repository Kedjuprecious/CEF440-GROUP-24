const Object = require('../Models/objectModel');
const Category = require('../Models/categoriesModel');

const uploadObject = async (req, res) => {
  const { title, description,  imageURL } = req.body;
 
  try {
  //  // Find the category based on the objectName
  //  const category = await Category.findOne({ categoryName: title });
  // //  if (!category) {
  // //    return res.status(200).json({ message: 'new category' });
  // //  }
  console.log("Received data:", req.body);
    const newItem = new Object({ title, description,  imageURL });
    console.log("Received data:", req.body);
    await newItem.save();
    res.status(201).send(newItem);
  } catch (error) {
    res.status(500).send({ error: 'Failed to save item'});
    console.log(error)
  }

}

module.exports = {
  uploadObject,
};
