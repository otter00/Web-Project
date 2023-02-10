            //      ANIMATION       //

            let active;
            let counter = 0;
            
            // обрабатываем событие click на всех <div>
            let divs = Array.from(document.querySelectorAll('.bubble')).reverse()
            for (let i = 0; i < divs.length; ++i) {
                const isLast = (i + 1 === divs.length)
                divs[i].addEventListener('click', clickHandlerGenerator(isLast))
            }
            
            function clickHandlerGenerator(isLast = false) {
                return function () {
                let me = this;
            
                setTimeout(function () {
                    if (active) {
                        active.classList.remove('active');
                    }
                    me.classList.add('active');
            
                    active = me;
            
                    if (isLast) {
                        setTimeout(function () {
                            active.classList.remove('active');
                            active = undefined;
                            counter = 0;
                        }, 300)
                    }
                    }, counter * 300)
                ++counter;
                }
            }
            
            
            // ANIMATED TEXT
            
            var lineDrawing = anime({
                targets: '#lineDrawing .lines path',
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutSine',
                duration: 3000,
                delay: function(el, i) { return i * 250 },
                direction: 'alternate',
                loop: true
            });
            
            
            // TIMER

            // let numbers = [
//     'M0,0 L50,0 L50,50 L50,100 L0,100 L0,25 L0,0',
//     'M50,0 L50,15 L50,30 L50,45 L50,60 L50,75 L50,100',
//     'M0,0 L50,0 L50,50 L25,50 L0,50 L0,100 L50,100',
//     'M0,0 L50,0 L50,100 L0,100 L50,100 L50,50 L0,50',
//     'M0,0 L0,50 L50,50 L50,0 L50,35 L50,70 L50,100',
//     'M50,0 L0,0 L0,50 L25,50 L50,50 L50,100 L0,100',
//     'M50,0 L0,0 L0,50 L0,100 L50,100, L50,50 L0,50',
//     'M0,0 L50,0 L50,20 L50,40 L50,60 L50,80 L50,100',
//     'M0,0 L50,0 L50,100 L0,100 L0,0 L0,50 L50,50',
//     'M0,100 L50,100 L50,50 L50,0 L0,0 L0,50 L50,50'
//   ];
  
//   let digit = document.getElementsByClassName('digit');
  
//   function setTime() {
//       time_numbers = ((new Date()).toTimeString().substr(0,8)).split(':').join('');
  
//       for (let i = 0; i < time_numbers.length; i++) {
//           if (digit[i].dataset.number !== time_numbers.charAt(i)) {
//             digit[i].dataset.number = time_numbers.charAt(i);
//             morphDigit(digit[i].querySelector('path'), numbers[time_numbers.charAt(i)]);
//           }
//       }
//   };
  
//   function morphDigit(digit, numberPath) {
//     anime({
//       targets: digit,
//       d: [
//         { value: numberPath }
//       ],
//       easing: 'easeInOutExpo',
//       duration: 800
//     });
//   };
  
//   setTime();
//   setInterval(setTime, 1000);