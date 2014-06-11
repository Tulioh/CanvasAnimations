var Timer = function() {
    var startedTicks = new Date().getMilliseconds();
    var stopped = false;
    
    this.start = function() {
        return this.startedTicks;
    };
    
    this.stop = function() {
        stopped = true;
    };
    
    this.restart = function() {
        startedTicks = new Date().getMilliseconds();
        stopped = false;
    };
    
    this.isRunning = function() {
        return !this.stopped;
    };
    
    this.getTicksElapsed = function() {
        return new Date().getMilliseconds() - startedTicks;
    };
    
    this.getTimeElapsed = function() {
        return this.getTicksElapsed() / 1000;
    };
};
