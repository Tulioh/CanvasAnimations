var Timer = function() {
    var startedTicks = new Date();
    var stopped = false;
    
    this.start = function() {
        return this.startedTicks;
    };
    
    this.stop = function() {
        stopped = true;
    };
    
    this.restart = function() {
        startedTicks = new Date();
        stopped = false;
    };
    
    this.isRunning = function() {
        return !this.stopped;
    };
    
    this.getTicksElapsed = function() {
        return new Date().getTime() - startedTicks.getTime();
    };
    
    this.getTimeElapsed = function() {
        return this.getTicksElapsed() / 1000;
    };
};
