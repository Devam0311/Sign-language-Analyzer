🖤 Shadow Monarch’s ASL Vision
"Even in darkness, I see everything." — Sung Jin-Woo

This app is an ASL hand sign recognition tool inspired by the shadows. It uses a trained neural network to identify hand gestures from uploaded images. The current UI only supports drag-and-drop image uploads.

⚔ Prerequisites – Prepare Your Arsenal
Before summoning predictions, equip your machine with these essential tools:

Download Node.js from here.

npm install
npm run dev
pip install -r requirements.txt
uvicorn backend:app --reload --port 8000
pip install fastapi
pip install uvicorn
pip install keras
pip install tensorflow
pip install numpy
pip install pandas
pip install scikit-learn

🖐 How to Use — Wield the Power of Gesture
Prepare your hand gesture as an image (28x28 grayscale preferred).
Drag & drop the image into the drop zone of the app.
The model will instantly predict the digit with precision.
📚 Dataset — Knowledge of the Shadows
Our model is trained on the ancient Sign Language MNIST dataset, a collection of grayscale images representing American Sign Language (ASL) hand gestures. Each image is 28x28 pixels.

Classes: 24 letters (A–Y, excluding J and Z which require motion)
Training Samples: 27,455 images
Testing Samples: 7,172 images
Format: Flattened 784-value grayscale images


🧠 Backend AI — Shadow Training Rituals
The neural network model used for ASL classification is built using Keras and TensorFlow. Data exploration and preprocessing include:

Visualization via matplotlib and seaborn
Data scaling using StandardScaler
Dimensionality reduction with PCA and TSNE
Model architecture includes Conv2D, MaxPooling, BatchNorm, Dropout, and L2 regularization


💡 Project Details — Echoes of the Void
Frontend: React-based UI with a dark, themed interface.
Backend: FastAPI serves model predictions through HTTP.
Model: Trained convolutional neural network (CNN) built in Keras.
Functionality: Users upload ASL digit images for recognition.
Live Feedback: Predictions returned in real-time with animations.
Theme: UI heavily inspired by Solo Leveling.


🌌 Final Words
"The stronger you become, the more you can protect." — Sung Jin-Woo
For more info click here.

This project isn't just code — it's a conduit for accessibility and style. May your gestures pierce through the digital void.
