let slider = document.getElementById('myslider');
let viewsOutput = document.getElementsByClassName('views')[0];
let views = ["10K pageviews", "50K pageviews", "100K pageviews", "500K pageviews", "1M pageviews"];
let pricesOutput = document.getElementsByClassName('cash')[0];
let prices = [8, 12, 16, 24, 36];
let period = document.getElementsByClassName('period')[0];
let checkbox = document.getElementById('checkbox');
viewsOutput.innerHTML = views[0];
pricesOutput.innerHTML = prices[0];

function discount(price, dsicountPercentage) {
    let discounted = (price * 12) - (price * (dsicountPercentage / 100) * 12);
    return discounted;
}

function slide() {
    if (checkbox.checked == true) {
        period.innerHTML = '/year';
        slider.oninput();
    } else {
        period.innerHTML = '/month';
        slider.oninput();
    }
}

slider.oninput = function () {
    if (checkbox.checked == false) {
        period.innerHTML = '/month';
        console.log('not checked');
        if (this.value == 0) {
            console.log(this.value);
            viewsOutput.innerHTML = views[0];
            pricesOutput.innerHTML = prices[0];
        }
        if (this.value == 25) {
            console.log(this.value);
            viewsOutput.innerHTML = views[1];
            pricesOutput.innerHTML = prices[1];
        }
        if (this.value == 50) {
            console.log(this.value);
            viewsOutput.innerHTML = views[2];
            pricesOutput.innerHTML = prices[2];
        }
        if (this.value == 75) {
            console.log(this.value);
            viewsOutput.innerHTML = views[3];
            pricesOutput.innerHTML = prices[3];
        }
        if (this.value == 100) {
            console.log(this.value);
            viewsOutput.innerHTML = views[4];
            pricesOutput.innerHTML = prices[4];
        }
    } else {
        period.innerHTML = '/year';
        if (this.value == 0) {
            console.log(this.value);
            viewsOutput.innerHTML = views[0];
            pricesOutput.innerHTML = discount(prices[0], 25);
        }
        if (this.value == 25) {
            console.log(this.value);
            viewsOutput.innerHTML = views[1];
            pricesOutput.innerHTML = discount(prices[1], 25);
        }
        if (this.value == 50) {
            console.log(this.value);
            viewsOutput.innerHTML = views[2];
            pricesOutput.innerHTML = discount(prices[2], 25);
        }
        if (this.value == 75) {
            console.log(this.value);
            viewsOutput.innerHTML = views[3];
            pricesOutput.innerHTML = discount(prices[3], 25);
        }
        if (this.value == 100) {
            console.log(this.value);
            viewsOutput.innerHTML = views[4];
            pricesOutput.innerHTML = discount(prices[4], 25);
        }
    }

}

document.onload = slider.oninput();


