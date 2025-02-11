// backend/index.js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

// ✅ MongoDB schema and model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// ✅ Express app setup
const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/contact', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB error:', err));

app.post('/add', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const newContact = new Contact({ name, email, subject, message });
    const savedContact = await newContact.save();

    console.log('Saved:', savedContact);
    res.status(201).json(savedContact);
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).json({ error: err.message });
  }
});


// ✅ Start server on port 3003
const PORT = 3003;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
