const initializers = ['glorot_uniform', 'glorot_normal', 'he_normal', 'he_uniform', 'lecun_normal', 'lecun_uniform', 'ones', 'zeros']
const bool = ['True', 'False']

const layers = {
    Dense: {
        name: 'Dense',
        hyperparameters: {
            units: {
                name: 'units',
                form: {
                    type: 'int'
                },
                value: 32
            },
            activation: {
                name: 'activation',
                form: {
                    type: 'string'
                },
                value: 'None'
            },
            use_bias: {
                name: 'use_bias',
                form: {
                    type: 'dropdown',
                    options: bool
                },
                value: 'True'
            },
            kernel_initializer: {
                name: 'kernel_initializer',
                form: {
                    type: 'dropdown',
                    options: initializers
                },
                value: 'glorot_uniform'
            },
            bias_initializers: {
                name: 'bias_initializer',
                form: {
                    type: 'dropdown',
                    options: initializers
                },
                value: 'zeros'
            }
        }
    },
    Conv2D: {
        name: 'Conv2D',
        hyperparameters: {
            filters: {
                name: 'filters',
                form: {
                    type: 'int'
                },
                value: 32
            },
            kernel_size: {
                name: 'kernel_size',
                form: {
                    type: 'int'
                },
                value: 2
            },
            padding: {
                name: 'padding',
                form: {
                    type: 'dropdown',
                    options: ['same', 'valid']
                },
                value: 'valid'
            },
            activation: {
                name: 'activation',
                form: {
                    type: 'string'
                },
                value: 'None'
            },
            kernel_initializer: {
                name: 'kernel_initializer',
                form: {
                    type: 'dropdown',
                    options: initializers
                },
                value: 'glorot_uniform'
            },
            bias_initializers: {
                name: 'bias_initializer',
                form: {
                    type: 'dropdown',
                    options: initializers
                },
                value: 'zeros'
            }
        }
    }
}