from flask import Flask, render_template, make_response,send_file
import numpy as np
import matplotlib.pyplot as plt
import io
import base64
import seaborn as sns

app = Flask(__name__)

@app.route('/')
def index():
    np.random.seed(0) 
    data = np.random.randint(0, 100, size=30) 
    days = np.arange(1, 31)

    plt.bar(days, data, color='blue')
    plt.title('Data for the Month')
    plt.xlabel('Day of the Month')
    plt.ylabel('Data Value')
    plt.xticks(days)
    plt.grid(True)

    buffer = io.BytesIO()
    plt.savefig(buffer, format='png')
    buffer.seek(0)

    plot_data = base64.b64encode(buffer.getvalue()).decode('utf-8')

    response = make_response(render_template('index.html', plot_data=plot_data))

    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type'

    return response

if __name__ == '__main__':
    app.run(debug=True)

app = Flask(__name__)

def generate_heatmap():
    np.random.seed(0)
    heatmap_data = np.random.rand(10, 10)


    sns.heatmap(heatmap_data, cmap='hot', annot=True, fmt=".2f", cbar=True)
    plt.title('Heatmap')
    plt.axis('off')

    buffer = io.BytesIO()
    plt.savefig(buffer, format='png')
    buffer.seek(0)

    plt.close()

    return buffer

@app.route('/heatmap')
def serve_heatmap():

    heatmap_buffer = generate_heatmap()

    return send_file(heatmap_buffer, mimetype='image/png')


if __name__ == '__main__':
    app.run(debug=True)

