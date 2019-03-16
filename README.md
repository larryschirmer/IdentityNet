# Identity Net

### What is Identity Net?

The name for this project comes from the [identity matrix](https://www.khanacademy.org/math/precalculus/precalc-matrices/properties-of-matrix-multiplication/a/intro-to-identity-matrices). The network is trained to return the same number as its input (between 0 and 1). Developing deep neural networks is tough, and the point of this project is to demonstrate how to train a model and deploy it to an existing react app. It's contrived, but it's also self-validating.

The model is built and trained with [pytorch](https://pytorch.org/) and saved as an [onnx](https://onnx.ai/) model. I like the flexibility I have in building networks in pytorch and the community around it is 👍. Onnx models are very light weight (`30kb`), and are mostly straightforward to setup. I say mostly because it's still new and the community (and code examples are few and far between). 

### How is this project organized?

There are two parts to this project that make up an example process of designing a model, training a model, and embedding it in a react app.

1. `Generate_Model.ipynb` is a Jupyter Notebook that steps through the process of configuring the network, building the dataset, training, and saving. An online version of this notebook is available here. [https://notebooks.azure.com/larryschirmer/projects/identitynet](https://notebooks.azure.com/larryschirmer/projects/identitynet)

2. `src/MainPage/MainPage.js` is the component that uses the saved model. The component uses a slider as input and passes the value to `src/MainPage/useONNX.js` which generates the value and passes it back. An online version of this app is available here [https://codesandbox.io/s/k0yy89n57o](https://codesandbox.io/s/k0yy89n57o)
