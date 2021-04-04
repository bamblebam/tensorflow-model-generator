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

  Conv1D: {
    name: "Conv1D",
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
      strides: {
        name: "strides",
        form: {
          type: 'int'
        },
        value: 1
      },
      padding: {
        name: "padding",
        form: {
          type: "dropdown",
          options: ["'same'", "'valid'"]
        },
        value: "valid"
      },
      activation: {
        name: "activation",
        form: {
          type: "dropdown",
          options: activations
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
      strides: {
        name: "strides",
        form: {
          type: 'int'
        },
        value: "(1, 1)"
      },
      padding: {
        name: "padding",
        form: {
          type: "dropdown",
          options: ["'same'", "'valid'"]
        },
        value: "valid"
      },
      activation: {
        name: "activation",
        form: {
          type: "dropdown",
          options: activations
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
  },
  Conv1DTranspose: {
    name: "Conv1DTranspose",
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
      strides: {
        name: "strides",
        form: {
          type: 'int'
        },
        value: 1
      },
      padding: {
        name: "padding",
        form: {
          type: "dropdown",
          options: ["'same'", "'valid'"]
        },
        value: "valid"
      },
      activation: {
        name: "activation",
        form: {
          type: "dropdown",
          options: activations
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
  },

  Conv2DTranspose: {
    name: "Conv2DTranspose",
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
      strides: {
        name: "strides",
        form: {
          type: 'int'
        },
        value: "(1, 1)"
      },
      padding: {
        name: "padding",
        form: {
          type: "dropdown",
          options: ["'same'", "'valid'"]
        },
        value: "valid"
      },
      activation: {
        name: "activation",
        form: {
          type: "dropdown",
          options: activations
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
  },
  AveragePooling1D: {
    name: "AveragePooling1D",
    hyperparameters: {
      pool_size: {
        name: 'pool_size',
        form: {
          type: "int"
        },
        value: 2
      },
      strides: {
        name: 'strides',
        form: {
          type: "int"
        },
        value: "None"
      },
      padding: {
        name: "padding",
        form: {
          type: "dropdown",
          options: ["'same'", "'valid'"]
        },
        value: "valid"
      }
    }
  },
  AveragePooling2D: {
    name: "AveragePooling2D",
    hyperparameters: {
      pool_size: {
        name: 'pool_size',
        form: {
          type: "int"
        },
        value: 2
      },
      strides: {
        name: 'strides',
        form: {
          type: "int"
        },
        value: "None"
      },
      padding: {
        name: "padding",
        form: {
          type: "dropdown",
          options: ["'same'", "'valid'"]
        },
        value: "valid"
      }
    }
  },
  Dropout: {
    name: "Dropout",
    hyperparameters: {
      rate: {
        name: 'rate',
        form: {
          type: "int"
        },
        value: 0.5
      }
    }
  },
  Flatten: {
    name: "Flatten",
    hyperparameters: {}
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
          options: ['channels_first', 'channels_last']
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
          options: ['channels_first', 'channels_last']
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
          options: ['channels_first', 'channels_last']
        },
        value: "None"
      }
    }
  },
  GlobalMaxPool1D: {
    name: "GlobalMaxPool1D",
    hyperparameters: {
      data_format: {
        name: "data_format",
        form: {
          type: "dropdown",
          options: ['channels_first', 'channels_last']
        },
        value: "None"
      }
    }
  },
  GlobalMaxPool2D: {
    name: "GlobalMaxPool2D",
    hyperparameters: {
      data_format: {
        name: "data_format",
        form: {
          type: "dropdown",
          options: ['channels_first', 'channels_last']
        },
        value: "None"
      }
    }
  },
  GlobalAveragePooling1D: {
    name: "GlobalAveragePooling1D",
    hyperparameters: {
      data_format: {
        name: "data_format",
        form: {
          type: "dropdown",
          options: ['channels_first', 'channels_last']
        },
        value: "None"
      }
    }
  },
  GlobalAveragePooling2D: {
    name: "GlobalAveragePooling2D",
    hyperparameters: {
      data_format: {
        name: "data_format",
        form: {
          type: "dropdown",
          options: ['channels_first', 'channels_last']
        },
        value: "None"
      }
    }
  },
  GaussianNoise: {
    name: "GaussianNoise",
    hyperparameters: {
      stddev: {
        name: "stddev",
        form: {
          type: "float"
        },
        value: "None"
      }
    }
  },
  GaussianDropout: {
    name: "GaussianDropout",
    hyperparameters: {
      rate: {
        name: "rate",
        form: {
          type: "float"
        },
        value: "None"
      }
    }
  },
  GRU: {
    name: "GRU",
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
  BatchNormalization: {
    name: "BatchNormalization",
    hyperparameters: {
      axis: {
        name: "axis",
        form: {
          type: "int"
        },
        value: -1
      },
      momentum: {
        name: "momentum",
        form: {
          type: "float"
        },
        value: 0.99
      },
      epsilon: {
        name: "epsilon",
        form: {
          type: "float"
        },
        value: 0.001
      },
      center: {
        name: "center",
        form: {
          type: "dropdown",
          options: bool
        },
        value: "True"
      },
      scale: {
        name: "scale",
        form: {
          type: "dropdown",
          options: bool
        },
        value: "True"
      }
    }
  }
};

export default layers;
