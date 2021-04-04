const initializers = [
  "glorot_uniform",
  "glorot_normal",
  "he_normal",
  "he_uniform",
  "lecun_normal",
  "lecun_uniform",
  "ones",
  "zeros"
];
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
          type: "string"
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
          type: "string"
        },
        value: "None"
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
      }
    }
  },
  SpatialDropout1D: {
    name: "SpatialDropout1D",
    hyperparameters: {
      rate: {
        name: "rate",
        form: {
          type: "float"
        },
        value: 0
      }
    }
  },
  SpatialDropout2D: {
    name: "SpatialDropout2D",
    hyperparameters: {
      rate: {
        name: "rate",
        form: {
          type: "float"
        },
        value: 0
      },
      data_format: {
        name: "data_format",
        form: {
          type: "dropdown",
          options: "['channels_first' , 'channels_last']"
        },
        value: "None"
      }
    }
  },
  Reshape: {
    name: "Reshape",
    hyperparameters: {
      target_shape: {
        name: "target_shape",
        form: {
          type: "tuple"
        },
        value: (0, 1)
      }
    }
  },
  LSTM: {
    name: "LSTM",
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
          type: "string"
        },
        value: "tanh"
      },
      use_bias: {
        name: "use_bias",
        form: {
          type: "dropdown",
          options: bool
        },
        value: "True"
      },
      recurrent_activation: {
        name: "recurrent_activation",
        form: {
          type: "string"
        },
        value: "sigmoid"
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
      }
    }
  },
  MaxPool1D: {
    name: "MaxPool1D",
    hyperparameters: {
      pool_size: {
        name: "pool_size",
        form: {
          type: "int"
        },
        value: 2
      },
      strides: {
        name: "strides",
        form: {
          type: "int"
        },
        value: "None"
      },
      padding: {
        name: "padding",
        form: {
          type: "dropdown",
          options: ["same", "valid"]
        },
        value: "valid"
      },
      data_format: {
        name: "data_format",
        form: {
          type: "dropdown",
          options: "['channels_first' , 'channels_last']"
        },
        value: "None"
      }
    }
  },
  MaxPool2D: {
    name: "MaxPool2D",
    hyperparameters: {
      pool_size: {
        name: "pool_size",
        form: {
          type: "tuple"
        },
        value: (2, 2)
      },
      strides: {
        name: "strides",
        form: {
          type: "int"
        },
        value: "None"
      },
      padding: {
        name: "padding",
        form: {
          type: "dropdown",
          options: ["same", "valid"]
        },
        value: "valid"
      },
      data_format: {
        name: "data_format",
        form: {
          type: "dropdown",
          options: "['channels_first' , 'channels_last']"
        },
        value: "None"
      }
    }
  }
};

export default layers;
