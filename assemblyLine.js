function createAssemblyLine() {

    return {
        hasClima(obj) {
            obj.temp = 21;
            obj.tempSettings = 21;
            obj.adjustTemp = function () {
                if (obj.temp < obj.tempSettings) {
                    obj.temp++;
                } else if (obj.temp > obj.tempSettings) {
                    obj.temp--;
                }
            }
        },

        hasAudio(obj) {
            obj.currentTrack = {
                name: null,
                artist: null
            }
            obj.nowPlaying = function() {
                if (obj.currentTrack !== null) {
                    console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`);
                }
            }
        },

        hasParktronic(obj) {
            obj.checkDistance = function(num) {
                if (num < 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (num >= 0.1 && num < 0.25) {
                    console.log('Beep! Beep!');
                } else if (num >= 0.25 && num < 0.5) {
                    console.log('Beep!');
                } else {
                    console.log('');
                }
            }
        }
    }

}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

console.log(myCar);