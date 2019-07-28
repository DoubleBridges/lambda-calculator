
            if (display.toString() === '0') {
                if (e.target.textContent === '.') {
                  return num
                } else {
                  num = display.toString().concat(e.target.textContent).slice(1)
                }
              }
              return num