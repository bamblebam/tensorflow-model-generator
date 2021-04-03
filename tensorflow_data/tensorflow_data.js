const initializers = [
  "'glorot_uniform'",
  "'glorot_normal'",
  "'he_normal'",
  "'he_uniform'",
  "'lecun_normal'",
  "'lecun_uniform'",
  "'ones'",
  "'zeros'"
];
const regularizers = ["'l1'", "'l2'"]
const activations = ["'relu'", "'selu'", "'elu'", "'gelu'", "'exponential'", "'linear'", "'tanh'", "'softmax'", "'softplus'"]
const bool = ["True", "False"];

const layers = {
  Dense: {
    name: "Dense",
    hyperparameters: {
      units: {
        name: "units",
        form: {
          type: "int"
        },
        value: 32
      },
      activation: {
        name: "activation",
        form: {
          type: "dropdown",
          options: activations
        },
        value: "None"
      },
      use_bias: {
        name: "use_bias",
        form: {
          type: "dropdown",
          options: bool
        },
        value: "True"
      },
      kernel_initializer: {
        name: "kernel_initializer",
        form: {
          type: "dropdown",
          options: initializers
        },
        value: "glorot_uniform"
      },
      bias_initializers: {
        name: "bias_initializer",
        form: {
          type: "dropdown",
          options: initializers
        },
        value: "zeros"
      },
      kernel_regularizer: {
        name: "kernel_regularizer",
        form: {
          type: "dropdown",
          options: regularizers
        },
        value: "None"
      },
      bias_regularizer: {
        name: "bias_regularizer",
        form: {
          type: "dropdown",
          options: regularizers
        },
        value: "None"
      }
    }
  },

  Conv2D: {
    name: "Conv2D",
    hyperparameters: {
      filters: {
        name: "filters",
        form: {
          type: "int"
        },
        value: 32
      },
      kernel_size: {
        name: "kernel_size",
        form: {
          type: "int"
        },
        value: 2
      },
      padding: {
        name: "padding",
        form: {
          type: "dropdown",
          options: ["same", "valid"]
        },
        value: "valid"
      },
      activation: {
        name: "activation",
        form: {
          type: "dropdown"
        },
        value: activations
      },
      kernel_initializer: {
        name: "kernel_initializer",
        form: {
          type: "dropdown",
          options: initializers
        },
        value: "glorot_uniform"
      },
      bias_initializers: {
        name: "bias_initializer",
        form: {
          type: "dropdown",
          options: initializers
        },
        value: "zeros"
      },
      kernel_regularizers: {
        name: "kernel_regularizers",
        form: {
          type: "dropdown",
          options: regularizers
        },
        value: "None"
      },
      bias_regularizerss: {
        name: "bias_regularizers",
        form: {
          type: "dropdown",
          options: regularizers
        },
        value: "None"
      }
    }
  }
};

export default layers;
