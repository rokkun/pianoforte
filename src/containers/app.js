import { Container } from 'unstated';

export default class AppContainer extends Container {
  state = {
    division: 0,
    measures: 1,
    totalTime: 0,
    totalTicks: 0,
    currentTime: 0,
    currentTick: 0,
    currentMeasure: 0,
    markerPercentage: 0
  };

  setTimeUsing(player) {
    const ppq = player.division * 4;
    const currentMeasure = ~~(player.tick / ppq);

    this.setState({
      currentMeasure,
      currentTick: player.tick,
      currentTime: ~~(player.getSongTime() - player.getSongTimeRemaining())
    });
  }
}

export const appContainer = new AppContainer();
