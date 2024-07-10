const stocks = [
    { symbol: 'AAPL', price: 150 },
    { symbol: 'GOOGL', price: 2800 },
    { symbol: 'AMZN', price: 3400 }
];

let portfolio = {};

function displayStocks() {
    const stockContainer = document.getElementById('stocks');
    stockContainer.innerHTML = '';
    stocks.forEach(stock => {
        const stockDiv = document.createElement('div');
        stockDiv.textContent = `${stock.symbol}: $${stock.price}`;
        stockContainer.appendChild(stockDiv);
    });
}

function populateStockOptions() {
    const stockSelect = document.getElementById('stock');
    stocks.forEach(stock => {
        const option = document.createElement('option');
        option.value = stock.symbol;
        option.textContent = stock.symbol;
        stockSelect.appendChild(option);
    });
}

function updatePortfolio() {
    const portfolioContainer = document.getElementById('portfolio-stocks');
    portfolioContainer.innerHTML = '';
    for (let symbol in portfolio) {
        const stockDiv = document.createElement('div');
        stockDiv.textContent = `${symbol}: ${portfolio[symbol]} shares`;
        portfolioContainer.appendChild(stockDiv);
    }
}

document.getElementById('tradeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const stockSymbol = document.getElementById('stock').value;
    const quantity = parseInt(document.getElementById('quantity').value);

    if (!portfolio[stockSymbol]) {
        portfolio[stockSymbol] = 0;
    }
    portfolio[stockSymbol] += quantity;
    updatePortfolio();
});

document.getElementById('sellButton').addEventListener('click', function() {
    const stockSymbol = document.getElementById('stock').value;
    const quantity = parseInt(document.getElementById('quantity').value);

    if (!portfolio[stockSymbol] || portfolio[stockSymbol] < quantity) {
        alert('Not enough shares to sell');
        return;
    }
    portfolio[stockSymbol] -= quantity;
    if (portfolio[stockSymbol] === 0) {
        delete portfolio[stockSymbol];
    }
    updatePortfolio();
});

displayStocks();
populateStockOptions();
