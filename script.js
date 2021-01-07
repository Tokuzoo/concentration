const $button = document.getElementsByTagName('button');

const $turn = document.getElementById('turn');

const $gameclear = document.getElementById('gameclear');

const $test = document.getElementById('test');

$turn.style.display = 'none';

$gameclear.style.display = 'none';

// questionmark zone

let buttonlength = 0;

const questions = () => {
    $button[buttonlength].textContent = '?';
}

while(buttonlength < $button.length - 1){
    questions();
    buttonlength++;
}

// numbers function

const numbers = [1,7,3,5,5,9,1,3,6,2,8,4,9,2,6,4,8,7];

let buttonindex = 0;

let clickcount = 0;
let index;
let arrayindex = [];
let remain = 2;
let buttoncount = 0;

const ess = () => {
    while(clickcount < $button.length - 1){
        $button[clickcount].addEventListener('click',(e) => {
            index = Array.prototype.indexOf.call($button,e.target);
            $button[index].textContent = numbers[index];
            arrayindex.push(e.target.textContent);
            arrayindex.push(Array.prototype.indexOf.call($button,e.target));
            e.target.style.color = 'red';
            remain--;
            if(remain === 0){
                $turn.style.display = 'inline-block';
                while(buttoncount < $button.length - 1){
                    $button[buttoncount].disabled = true;
                    buttoncount++;
                }
            }
        })
        clickcount++;
    }
}

ess();

let retucount = 0;

let clearcount = ($button.length - 1) / 2;

let turncount = 0;

let clearlist = [];

let clearindex = 0;

$turn.addEventListener('click',() => {
    if(arrayindex[0] === arrayindex[2] && arrayindex[1] !== arrayindex[3]){
        clearcount--;
        $button[arrayindex[1]].style.background = 'white';
        $button[arrayindex[1]].style.border = 'none';
        $button[arrayindex[1]].style.color = 'white';
        $button[arrayindex[1]].style.boxShadow = 'none';
        $button[arrayindex[3]].style.background = 'white';
        $button[arrayindex[3]].style.color = 'white';
        $button[arrayindex[3]].style.boxShadow = 'none';
        $button[arrayindex[3]].style.border = 'none';
        turncount++;
        clearlist.push(arrayindex[1]);
        clearlist.push(arrayindex[3]);
    } else{
        $button[arrayindex[1]].textContent = '?';
        $button[arrayindex[3]].textContent = '?';
        $button[arrayindex[1]].style.color = 'black';
        $button[arrayindex[3]].style.color = 'black';
        turncount++;
    }

    while(retucount < $button.length){
        $button[retucount].disabled = false;
        retucount++;
    }

    $turn.style.display = 'none';
    clickcount = 0;
    index = 0;
    arrayindex = [];
    remain = 2;
    buttoncount = 0;
    retucount = 0;
    while(clearindex < clearlist.length){
        $button[clearlist[clearindex]].disabled = true;
        clearindex++;
    }
    clearindex = 0;
    if(clearcount === 0){
        $gameclear.style.display = 'block';
        $gameclear.textContent = ('gameclear! かかったターン数:'+turncount);
    }
})
