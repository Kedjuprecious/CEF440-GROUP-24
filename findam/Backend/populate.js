
const mongoose = require('mongoose');
const Notification = require('./Models/notificationModel');  // Adjust the path based on your project structure
const UserModel = require('./Models/userModel');
const mongoURI = 'mongodb+srv://Wendydjoumessi:wendy512004@atlascluster.ppt19nh.mongodb.net/Archival_retrieval_system_db?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));


const populateNotifications = async () => {
  try {
    const users = await UserModel.find({}, '_id');
    
    const notifications = [
      {
        userID: users[0]._id,  // Replace with a valid user ID from the User collection
        message: 'Notification Message 1',
        isRead: false,
        createdAt: new Date(),
      },
      {
        userID: users[1]._id,
        message: 'Notification Message 2',
        isRead: true,
        createdAt: new Date(),
      },
    ];
    
    // Insert new notifications
    for (const notificationData of notifications) {
      const notification = new Notification(notificationData);
      await notification.save();
    }

    console.log('Notifications populated successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error populating notifications:', error);
  }
};

populateNotifications();
