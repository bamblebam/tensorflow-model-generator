import tensorflow as tf
import tensorflow
from tensorflow import keras
from tensorflow.keras.layers import Dense, Input
from tensorflow.keras.models import Sequential
# import sys
# from io import StringIO
import os

# codeOut = StringIO()
# codeerr = StringIO()

code = """

model = Sequential([
Input(32),
Dense(units = 32, activation = 'relu'),
Dense(units = 1),
])
model.compile(loss='categorical_cross_entropy',optimizer='adam')

model.save('model1.h5')

"""

code2 = """
def f(x):
    x = x + 1
    return x

with open(os.path.join('D:/code projects/tensorflow model generator/backend_API', 'myfile1.txt'), 'w') as fp:
    pass
print( 'This is my output.')
"""
# with open(os.path.join('D:/code projects/tensorflow model generator/backend_API', 'myfile1.txt'), 'w') as fp:
#     pass

exec(code)

# print(os.get_dir())
