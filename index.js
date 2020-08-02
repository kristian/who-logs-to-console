const stderrWrite = process.stderr.write;
[process.stdout, process.stderr].forEach(stream => {
  const write = stream.write, hook = function() {
    write.apply(this, arguments);
  
    // before tracing, we need to unhook the stderr write function
    const stderrHook = process.stderr.write;
    process.stderr.write = stderrWrite;
    console.trace("who-logs-to-console");
    process.stderr.write = stderrHook;
  };

  // hook into the write stream
  stream.write = hook;
});