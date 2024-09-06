let data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

const buttons = document.querySelectorAll('.activity-option');

const actrivateClickedButton = (button) => {
    buttons.forEach((button) => {
        button.classList.remove('active');
    })
    button.classList.add('active');
}

const clearActivities = () => {
    const activities = document.querySelectorAll('.activity');
    activities.forEach(a => a.remove());
}

const renderCards = (clickedOption) => {
    clearActivities();

    const activityTracker = document.querySelector('.activity-tracker');

    const calculateTimeFrame = (option) => {
        if(option === 'daily'){
            return 'Yesterday';
        } else if(option === 'weekly'){
            return 'Last Week';
        } else if(option === 'monthly'){
            return 'Last Month';
        }
    } 

    data.forEach(activity => {
        const name = activity.title;
        const activityClass = name.toLocaleLowerCase().replace(' ', '-');
        const timeFrameData = activity.timeframes[clickedOption];
        const previousTimeFrame = calculateTimeFrame(clickedOption);
        const section = document.createElement('section');
        section.classList.add('activity', activityClass);
        const stringToInject = `
        <div class="activity-bg">
        <img class="icon" src="images/icon-${activityClass}.svg">
        </div>
        <div class="activity-info">
            <header class="activity-header">
            <h2 class="activity-name">${name}</h2>
            <img class="ellipsis" src="images/icon-ellipsis.svg">
            </header>
            <div class="activity-timeframe">
            <h3 class="current-timeframe">${timeFrameData.current}hrs</h3>
            <div class="previous-timeframe">
                <p class="time-window">${previousTimeFrame}</p>
                <p>-</p>
                <p class="time">${timeFrameData.previous}hrs</p>
            </div>
            </div>
        </div>`
        section.innerHTML = stringToInject;   
        activityTracker.append(section);
    })
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        actrivateClickedButton(button);
        const clickedOption = button.dataset.option;
        renderCards(clickedOption);
    })
})


buttons[1].click();