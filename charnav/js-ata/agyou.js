const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");

// Fill Window Width and Height
ctx.width = myCanvas.width = myCanvas.clientWidth;
ctx.height = myCanvas.height = myCanvas.clientHeight;

// Set Background Color
ctx.fillStyle = "#fff";
ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

// Mouse Event Handlers
if (myCanvas) {
  var isDown = false;
  var canvasX, canvasY;
  ctx.lineWidth = 5;

  $(myCanvas)
    .mousedown(function(e) {
      isDown = true;
      ctx.beginPath();
      canvasX = e.pageX - myCanvas.offsetLeft;
      canvasY = e.pageY - myCanvas.offsetTop;
      ctx.moveTo(canvasX, canvasY);
    })
    .mousemove(function(e) {
      if (isDown !== false) {
        canvasX = e.pageX - myCanvas.offsetLeft;
        canvasY = e.pageY - myCanvas.offsetTop;
        ctx.lineTo(canvasX, canvasY);
        ctx.strokeStyle = "#000";
        ctx.stroke();
      }
    })
    .mouseup(function(e) {
      isDown = false;
      ctx.closePath();
    });
}

// Touch Events Handlers
draw = {
  started: false,
  start: function(evt) {

    ctx.beginPath();
    ctx.moveTo(
      evt.touches[0].pageX,
      evt.touches[0].pageY
    );

    this.started = true;

  },
  move: function(evt) {

    if (this.started) {
      ctx.lineTo(
        evt.touches[0].pageX,
        evt.touches[0].pageY
      );

      ctx.strokeStyle = "#000";
      ctx.lineWidth = 5;
      ctx.stroke();
    }

  },
  end: function(evt) {
    this.started = false;
  }
};

// Touch Events
myCanvas.addEventListener('touchstart', draw.start, false);
myCanvas.addEventListener('touchend', draw.end, false);
myCanvas.addEventListener('touchmove', draw.move, false);

// Disable Page Move
document.body.addEventListener('touchmove', function(evt) {
  evt.preventDefault();
}, false);

//-----------------------------------------------------------------------------------------------------------------------------

const myCanvas2 = document.getElementById("myCanvas2");
const ctx2 = myCanvas2.getContext("2d");

// Fill Window Width and Height
ctx2.width = myCanvas2.width = myCanvas2.clientWidth;
ctx2.height = myCanvas2.height = myCanvas2.clientHeight;

// Set Background Color
ctx2.fillStyle = "#fff";
ctx2.fillRect(0, 0, myCanvas2.width, myCanvas2.height);

// Mouse Event Handlers
if (myCanvas2) {
  var isDown = false;
  var canvasX, canvasY;
  ctx2.lineWidth = 5;

  $(myCanvas2)
    .mousedown(function(e) {
      isDown = true;
      ctx2.beginPath();
      canvasX = e.pageX - myCanvas2.offsetLeft;
      canvasY = e.pageY - myCanvas2.offsetTop;
      ctx2.moveTo(canvasX, canvasY);
    })
    .mousemove(function(e) {
      if (isDown !== false) {
        canvasX = e.pageX - myCanvas2.offsetLeft;
        canvasY = e.pageY - myCanvas2.offsetTop;
        ctx2.lineTo(canvasX, canvasY);
        ctx2.strokeStyle = "#000";
        ctx2.stroke();
      }
    })
    .mouseup(function(e) {
      isDown = false;
      ctx2.closePath();
    });
}

// Touch Events Handlers
draw = {
  started: false,
  start: function(evt) {

    ctx2.beginPath();
    ctx2.moveTo(
      evt.touches[0].pageX,
      evt.touches[0].pageY
    );

    this.started = true;

  },
  move: function(evt) {

    if (this.started) {
      ctx2.lineTo(
        evt.touches[0].pageX,
        evt.touches[0].pageY
      );

      ctx2.strokeStyle = "#000";
      ctx2.lineWidth = 5;
      ctx2.stroke();
    }

  },
  end: function(evt) {
    this.started = false;
  }
};

// Touch Events
myCanvas2.addEventListener('touchstart', draw.start, false);
myCanvas2.addEventListener('touchend', draw.end, false);
myCanvas2.addEventListener('touchmove', draw.move, false);

// Disable Page Move
document.body.addEventListener('touchmove', function(evt) {
  evt.preventDefault();
}, false);

//-----------------------------------------------------------------------------------------------------------------------------

const myCanvas3 = document.getElementById("myCanvas3");
const ctx3 = myCanvas3.getContext("2d");

// Fill Window Width and Height
ctx3.width = myCanvas3.width = myCanvas3.clientWidth;
ctx3.height = myCanvas3.height = myCanvas3.clientHeight;

// Set Background Color
ctx3.fillStyle = "#fff";
ctx3.fillRect(0, 0, myCanvas3.width, myCanvas3.height);

// Mouse Event Handlers
if (myCanvas3) {
  var isDown = false;
  var canvasX, canvasY;
  ctx3.lineWidth = 5;

  $(myCanvas3)
    .mousedown(function(e) {
      isDown = true;
      ctx3.beginPath();
      canvasX = e.pageX - myCanvas3.offsetLeft;
      canvasY = e.pageY - myCanvas3.offsetTop;
      ctx3.moveTo(canvasX, canvasY);
    })
    .mousemove(function(e) {
      if (isDown !== false) {
        canvasX = e.pageX - myCanvas3.offsetLeft;
        canvasY = e.pageY - myCanvas3.offsetTop;
        ctx3.lineTo(canvasX, canvasY);
        ctx3.strokeStyle = "#000";
        ctx3.stroke();
      }
    })
    .mouseup(function(e) {
      isDown = false;
      ctx3.closePath();
    });
}

// Touch Events Handlers
draw = {
  started: false,
  start: function(evt) {

    ctx3.beginPath();
    ctx3.moveTo(
      evt.touches[0].pageX,
      evt.touches[0].pageY
    );

    this.started = true;

  },
  move: function(evt) {

    if (this.started) {
      ctx3.lineTo(
        evt.touches[0].pageX,
        evt.touches[0].pageY
      );

      ctx3.strokeStyle = "#000";
      ctx3.lineWidth = 5;
      ctx3.stroke();
    }

  },
  end: function(evt) {
    this.started = false;
  }
};

// Touch Events
myCanvas3.addEventListener('touchstart', draw.start, false);
myCanvas3.addEventListener('touchend', draw.end, false);
myCanvas3.addEventListener('touchmove', draw.move, false);

// Disable Page Move
document.body.addEventListener('touchmove', function(evt) {
  evt.preventDefault();
}, false);

//-----------------------------------------------------------------------------------------------------------------------------

const myCanvas4 = document.getElementById("myCanvas4");
const ctx4 = myCanvas4.getContext("2d");

// Fill Window Width and Height
ctx4.width = myCanvas4.width = myCanvas4.clientWidth;
ctx4.height = myCanvas4.height = myCanvas4.clientHeight;

// Set Background Color
ctx4.fillStyle = "#fff";
ctx4.fillRect(0, 0, myCanvas4.width, myCanvas4.height);

// Mouse Event Handlers
if (myCanvas4) {
  var isDown = false;
  var canvasX, canvasY;
  ctx4.lineWidth = 5;

  $(myCanvas4)
    .mousedown(function(e) {
      isDown = true;
      ctx4.beginPath();
      canvasX = e.pageX - myCanvas4.offsetLeft;
      canvasY = e.pageY - myCanvas4.offsetTop;
      ctx4.moveTo(canvasX, canvasY);
    })
    .mousemove(function(e) {
      if (isDown !== false) {
        canvasX = e.pageX - myCanvas4.offsetLeft;
        canvasY = e.pageY - myCanvas4.offsetTop;
        ctx4.lineTo(canvasX, canvasY);
        ctx4.strokeStyle = "#000";
        ctx4.stroke();
      }
    })
    .mouseup(function(e) {
      isDown = false;
      ctx4.closePath();
    });
}

// Touch Events Handlers
draw = {
  started: false,
  start: function(evt) {

    ctx4.beginPath();
    ctx4.moveTo(
      evt.touches[0].pageX,
      evt.touches[0].pageY
    );

    this.started = true;

  },
  move: function(evt) {

    if (this.started) {
      ctx4.lineTo(
        evt.touches[0].pageX,
        evt.touches[0].pageY
      );

      ctx4.strokeStyle = "#000";
      ctx4.lineWidth = 5;
      ctx4.stroke();
    }

  },
  end: function(evt) {
    this.started = false;
  }
};

// Touch Events
myCanvas4.addEventListener('touchstart', draw.start, false);
myCanvas4.addEventListener('touchend', draw.end, false);
myCanvas4.addEventListener('touchmove', draw.move, false);

// Disable Page Move
document.body.addEventListener('touchmove', function(evt) {
  evt.preventDefault();
}, false);

//-----------------------------------------------------------------------------------------------------------------------------

const myCanvas5 = document.getElementById("myCanvas5");
const ctx5 = myCanvas5.getContext("2d");

// Fill Window Width and Height
ctx5.width = myCanvas5.width = myCanvas5.clientWidth;
ctx5.height = myCanvas5.height = myCanvas5.clientHeight;

// Set Background Color
ctx5.fillStyle = "#fff";
ctx5.fillRect(0, 0, myCanvas5.width, myCanvas5.height);

// Mouse Event Handlers
if (myCanvas5) {
  var isDown = false;
  var canvasX, canvasY;
  ctx5.lineWidth = 5;

  $(myCanvas5)
    .mousedown(function(e) {
      isDown = true;
      ctx5.beginPath();
      canvasX = e.pageX - myCanvas5.offsetLeft;
      canvasY = e.pageY - myCanvas5.offsetTop;
      ctx5.moveTo(canvasX, canvasY);
    })
    .mousemove(function(e) {
      if (isDown !== false) {
        canvasX = e.pageX - myCanvas5.offsetLeft;
        canvasY = e.pageY - myCanvas5.offsetTop;
        ctx5.lineTo(canvasX, canvasY);
        ctx5.strokeStyle = "#000";
        ctx5.stroke();
      }
    })
    .mouseup(function(e) {
      isDown = false;
      ctx5.closePath();
    });
}

// Touch Events Handlers
draw = {
  started: false,
  start: function(evt) {

    ctx5.beginPath();
    ctx5.moveTo(
      evt.touches[0].pageX,
      evt.touches[0].pageY
    );

    this.started = true;

  },
  move: function(evt) {

    if (this.started) {
      ctx5.lineTo(
        evt.touches[0].pageX,
        evt.touches[0].pageY
      );

      ctx5.strokeStyle = "#000";
      ctx5.lineWidth = 5;
      ctx5.stroke();
    }

  },
  end: function(evt) {
    this.started = false;
  }
};

// Touch Events
myCanvas5.addEventListener('touchstart', draw.start, false);
myCanvas5.addEventListener('touchend', draw.end, false);
myCanvas5.addEventListener('touchmove', draw.move, false);

// Disable Page Move
document.body.addEventListener('touchmove', function(evt) {
  evt.preventDefault();
}, false);

//-----------------------------------------------------------------------------------------------------------------------------

const myCanvas6 = document.getElementById("myCanvas6");
const ctx6 = myCanvas6.getContext("2d");

// Fill Window Width and Height
ctx6.width = myCanvas6.width = myCanvas6.clientWidth;
ctx6.height = myCanvas6.height = myCanvas6.clientHeight;

// Set Background Color
ctx6.fillStyle = "#fff";
ctx6.fillRect(0, 0, myCanvas6.width, myCanvas6.height);

// Mouse Event Handlers
if (myCanvas6) {
  var isDown = false;
  var canvasX, canvasY;
  ctx6.lineWidth = 5;

  $(myCanvas6)
    .mousedown(function(e) {
      isDown = true;
      ctx6.beginPath();
      canvasX = e.pageX - myCanvas6.offsetLeft;
      canvasY = e.pageY - myCanvas6.offsetTop;
      ctx6.moveTo(canvasX, canvasY);
    })
    .mousemove(function(e) {
      if (isDown !== false) {
        canvasX = e.pageX - myCanvas6.offsetLeft;
        canvasY = e.pageY - myCanvas6.offsetTop;
        ctx6.lineTo(canvasX, canvasY);
        ctx6.strokeStyle = "#000";
        ctx6.stroke();
      }
    })
    .mouseup(function(e) {
      isDown = false;
      ctx6.closePath();
    });
}

// Touch Events Handlers
draw = {
  started: false,
  start: function(evt) {

    ctx6.beginPath();
    ctx6.moveTo(
      evt.touches[0].pageX,
      evt.touches[0].pageY
    );

    this.started = true;

  },
  move: function(evt) {

    if (this.started) {
      ctx6.lineTo(
        evt.touches[0].pageX,
        evt.touches[0].pageY
      );

      ctx6.strokeStyle = "#000";
      ctx6.lineWidth = 5;
      ctx6.stroke();
    }

  },
  end: function(evt) {
    this.started = false;
  }
};

// Touch Events
myCanvas6.addEventListener('touchstart', draw.start, false);
myCanvas6.addEventListener('touchend', draw.end, false);
myCanvas6.addEventListener('touchmove', draw.move, false);

// Disable Page Move
document.body.addEventListener('touchmove', function(evt) {
  evt.preventDefault();
}, false);

//-----------------------------------------------------------------------------------------------------------------------------

const myCanvas7 = document.getElementById("myCanvas7");
const ctx7 = myCanvas7.getContext("2d");

// Fill Window Width and Height
ctx7.width = myCanvas7.width = myCanvas7.clientWidth;
ctx7.height = myCanvas7.height = myCanvas7.clientHeight;

// Set Background Color
ctx7.fillStyle = "#fff";
ctx7.fillRect(0, 0, myCanvas7.width, myCanvas7.height);

// Mouse Event Handlers
if (myCanvas7) {
  var isDown = false;
  var canvasX, canvasY;
  ctx7.lineWidth = 5;

  $(myCanvas7)
    .mousedown(function(e) {
      isDown = true;
      ctx7.beginPath();
      canvasX = e.pageX - myCanvas7.offsetLeft;
      canvasY = e.pageY - myCanvas7.offsetTop;
      ctx7.moveTo(canvasX, canvasY);
    })
    .mousemove(function(e) {
      if (isDown !== false) {
        canvasX = e.pageX - myCanvas7.offsetLeft;
        canvasY = e.pageY - myCanvas7.offsetTop;
        ctx7.lineTo(canvasX, canvasY);
        ctx7.strokeStyle = "#000";
        ctx7.stroke();
      }
    })
    .mouseup(function(e) {
      isDown = false;
      ctx7.closePath();
    });
}

// Touch Events Handlers
draw = {
  started: false,
  start: function(evt) {

    ctx7.beginPath();
    ctx7.moveTo(
      evt.touches[0].pageX,
      evt.touches[0].pageY
    );

    this.started = true;

  },
  move: function(evt) {

    if (this.started) {
      ctx7.lineTo(
        evt.touches[0].pageX,
        evt.touches[0].pageY
      );

      ctx7.strokeStyle = "#000";
      ctx7.lineWidth = 5;
      ctx7.stroke();
    }

  },
  end: function(evt) {
    this.started = false;
  }
};

// Touch Events
myCanvas7.addEventListener('touchstart', draw.start, false);
myCanvas7.addEventListener('touchend', draw.end, false);
myCanvas7.addEventListener('touchmove', draw.move, false);

// Disable Page Move
document.body.addEventListener('touchmove', function(evt) {
  evt.preventDefault();
}, false);

//-----------------------------------------------------------------------------------------------------------------------------

const myCanvas8 = document.getElementById("myCanvas8");
const ctx8 = myCanvas8.getContext("2d");

// Fill Window Width and Height
ctx8.width = myCanvas8.width = myCanvas8.clientWidth;
ctx8.height = myCanvas8.height = myCanvas8.clientHeight;

// Set Background Color
ctx8.fillStyle = "#fff";
ctx8.fillRect(0, 0, myCanvas8.width, myCanvas8.height);

// Mouse Event Handlers
if (myCanvas8) {
  var isDown = false;
  var canvasX, canvasY;
  ctx8.lineWidth = 5;

  $(myCanvas8)
    .mousedown(function(e) {
      isDown = true;
      ctx8.beginPath();
      canvasX = e.pageX - myCanvas8.offsetLeft;
      canvasY = e.pageY - myCanvas8.offsetTop;
      ctx8.moveTo(canvasX, canvasY);
    })
    .mousemove(function(e) {
      if (isDown !== false) {
        canvasX = e.pageX - myCanvas8.offsetLeft;
        canvasY = e.pageY - myCanvas8.offsetTop;
        ctx8.lineTo(canvasX, canvasY);
        ctx8.strokeStyle = "#000";
        ctx8.stroke();
      }
    })
    .mouseup(function(e) {
      isDown = false;
      ctx8.closePath();
    });
}

// Touch Events Handlers
draw = {
  started: false,
  start: function(evt) {

    ctx8.beginPath();
    ctx8.moveTo(
      evt.touches[0].pageX,
      evt.touches[0].pageY
    );

    this.started = true;

  },
  move: function(evt) {

    if (this.started) {
      ctx8.lineTo(
        evt.touches[0].pageX,
        evt.touches[0].pageY
      );

      ctx8.strokeStyle = "#000";
      ctx8.lineWidth = 5;
      ctx8.stroke();
    }

  },
  end: function(evt) {
    this.started = false;
  }
};

// Touch Events
myCanvas8.addEventListener('touchstart', draw.start, false);
myCanvas8.addEventListener('touchend', draw.end, false);
myCanvas8.addEventListener('touchmove', draw.move, false);

// Disable Page Move
document.body.addEventListener('touchmove', function(evt) {
  evt.preventDefault();
}, false);

//-----------------------------------------------------------------------------------------------------------------------------

const myCanvas9 = document.getElementById("myCanvas9");
const ctx9 = myCanvas9.getContext("2d");

// Fill Window Width and Height
ctx9.width = myCanvas9.width = myCanvas9.clientWidth;
ctx9.height = myCanvas9.height = myCanvas9.clientHeight;

// Set Background Color
ctx9.fillStyle = "#fff";
ctx9.fillRect(0, 0, myCanvas9.width, myCanvas9.height);

// Mouse Event Handlers
if (myCanvas9) {
  var isDown = false;
  var canvasX, canvasY;
  ctx9.lineWidth = 5;

  $(myCanvas9)
    .mousedown(function(e) {
      isDown = true;
      ctx9.beginPath();
      canvasX = e.pageX - myCanvas9.offsetLeft;
      canvasY = e.pageY - myCanvas9.offsetTop;
      ctx9.moveTo(canvasX, canvasY);
    })
    .mousemove(function(e) {
      if (isDown !== false) {
        canvasX = e.pageX - myCanvas9.offsetLeft;
        canvasY = e.pageY - myCanvas9.offsetTop;
        ctx9.lineTo(canvasX, canvasY);
        ctx9.strokeStyle = "#000";
        ctx9.stroke();
      }
    })
    .mouseup(function(e) {
      isDown = false;
      ctx9.closePath();
    });
}

// Touch Events Handlers
draw = {
  started: false,
  start: function(evt) {

    ctx9.beginPath();
    ctx9.moveTo(
      evt.touches[0].pageX,
      evt.touches[0].pageY
    );

    this.started = true;

  },
  move: function(evt) {

    if (this.started) {
      ctx9.lineTo(
        evt.touches[0].pageX,
        evt.touches[0].pageY
      );

      ctx9.strokeStyle = "#000";
      ctx9.lineWidth = 5;
      ctx9.stroke();
    }

  },
  end: function(evt) {
    this.started = false;
  }
};

// Touch Events
myCanvas9.addEventListener('touchstart', draw.start, false);
myCanvas9.addEventListener('touchend', draw.end, false);
myCanvas9.addEventListener('touchmove', draw.move, false);

// Disable Page Move
document.body.addEventListener('touchmove', function(evt) {
  evt.preventDefault();
}, false);

//-----------------------------------------------------------------------------------------------------------------------------

const myCanvas10 = document.getElementById("myCanvas10");
const ctx10 = myCanvas10.getContext("2d");

// Fill Window Width and Height
ctx10.width = myCanvas10.width = myCanvas10.clientWidth;
ctx10.height = myCanvas10.height = myCanvas10.clientHeight;

// Set Background Color
ctx10.fillStyle = "#fff";
ctx10.fillRect(0, 0, myCanvas10.width, myCanvas10.height);

// Mouse Event Handlers
if (myCanvas10) {
  var isDown = false;
  var canvasX, canvasY;
  ctx10.lineWidth = 5;

  $(myCanvas10)
    .mousedown(function(e) {
      isDown = true;
      ctx10.beginPath();
      canvasX = e.pageX - myCanvas10.offsetLeft;
      canvasY = e.pageY - myCanvas10.offsetTop;
      ctx10.moveTo(canvasX, canvasY);
    })
    .mousemove(function(e) {
      if (isDown !== false) {
        canvasX = e.pageX - myCanvas10.offsetLeft;
        canvasY = e.pageY - myCanvas10.offsetTop;
        ctx10.lineTo(canvasX, canvasY);
        ctx10.strokeStyle = "#000";
        ctx10.stroke();
      }
    })
    .mouseup(function(e) {
      isDown = false;
      ctx10.closePath();
    });
}

// Touch Events Handlers
draw = {
  started: false,
  start: function(evt) {

    ctx10.beginPath();
    ctx10.moveTo(
      evt.touches[0].pageX,
      evt.touches[0].pageY
    );

    this.started = true;

  },
  move: function(evt) {

    if (this.started) {
      ctx10.lineTo(
        evt.touches[0].pageX,
        evt.touches[0].pageY
      );

      ctx10.strokeStyle = "#000";
      ctx10.lineWidth = 5;
      ctx10.stroke();
    }

  },
  end: function(evt) {
    this.started = false;
  }
};

// Touch Events
myCanvas10.addEventListener('touchstart', draw.start, false);
myCanvas10.addEventListener('touchend', draw.end, false);
myCanvas10.addEventListener('touchmove', draw.move, false);

// Disable Page Move
document.body.addEventListener('touchmove', function(evt) {
  evt.preventDefault();
}, false);

