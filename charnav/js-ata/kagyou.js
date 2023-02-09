const myCanvas11 = document.getElementById("myCanvas11");
const ctx11 = myCanvas11.getContext("2d");

// Fill Window Width and Height
ctx11.width = myCanvas11.width = myCanvas11.clientWidth;
ctx11.height = myCanvas11.height = myCanvas11.clientHeight;

// Set Background Color
ctx11.fillStyle = "#fff";
ctx11.fillRect(0, 0, myCanvas11.width, myCanvas11.height);

// Mouse Event Handlers
if (myCanvas11) {
  var isDown = false;
  var canvasX, canvasY;
  ctx11.lineWidth = 5;

  $(myCanvas11)
    .mousedown(function(e) {
      isDown = true;
      ctx11.beginPath();
      canvasX = e.pageX - myCanvas11.offsetLeft;
      canvasY = e.pageY - myCanvas11.offsetTop;
      ctx11.moveTo(canvasX, canvasY);
    })
    .mousemove(function(e) {
      if (isDown !== false) {
        canvasX = e.pageX - myCanvas11.offsetLeft;
        canvasY = e.pageY - myCanvas11.offsetTop;
        ctx11.lineTo(canvasX, canvasY);
        ctx11.strokeStyle = "#000";
        ctx11.stroke();
      }
    })
    .mouseup(function(e) {
      isDown = false;
      ctx11.closePath();
    });
}

// Touch Events Handlers
draw = {
  started: false,
  start: function(evt) {

    ctx11.beginPath();
    ctx11.moveTo(
      evt.touches[0].pageX,
      evt.touches[0].pageY
    );

    this.started = true;

  },
  move: function(evt) {

    if (this.started) {
      ctx11.lineTo(
        evt.touches[0].pageX,
        evt.touches[0].pageY
      );

      ctx11.strokeStyle = "#000";
      ctx11.lineWidth = 5;
      ctx11.stroke();
    }

  },
  end: function(evt) {
    this.started = false;
  }
};

// Touch Events
myCanvas11.addEventListener('touchstart', draw.start, false);
myCanvas11.addEventListener('touchend', draw.end, false);
myCanvas11.addEventListener('touchmove', draw.move, false);

// Disable Page Move
document.body.addEventListener('touchmove', function(evt) {
  evt.preventDefault();
}, false);

//-----------------------------------------------------------------------------------------------------------------------------

const myCanvas12 = document.getElementById("myCanvas12");
const ctx12 = myCanvas12.getContext("2d");

// Fill Window Width and Height
ctx12.width = myCanvas12.width = myCanvas12.clientWidth;
ctx12.height = myCanvas12.height = myCanvas12.clientHeight;

// Set Background Color
ctx12.fillStyle = "#fff";
ctx12.fillRect(0, 0, myCanvas12.width, myCanvas12.height);

// Mouse Event Handlers
if (myCanvas12) {
  var isDown = false;
  var canvasX, canvasY;
  ctx12.lineWidth = 5;

  $(myCanvas12)
    .mousedown(function(e) {
      isDown = true;
      ctx12.beginPath();
      canvasX = e.pageX - myCanvas12.offsetLeft;
      canvasY = e.pageY - myCanvas12.offsetTop;
      ctx12.moveTo(canvasX, canvasY);
    })
    .mousemove(function(e) {
      if (isDown !== false) {
        canvasX = e.pageX - myCanvas12.offsetLeft;
        canvasY = e.pageY - myCanvas12.offsetTop;
        ctx12.lineTo(canvasX, canvasY);
        ctx12.strokeStyle = "#000";
        ctx12.stroke();
      }
    })
    .mouseup(function(e) {
      isDown = false;
      ctx12.closePath();
    });
}

// Touch Events Handlers
draw = {
  started: false,
  start: function(evt) {

    ctx12.beginPath();
    ctx12.moveTo(
      evt.touches[0].pageX,
      evt.touches[0].pageY
    );

    this.started = true;

  },
  move: function(evt) {

    if (this.started) {
      ctx12.lineTo(
        evt.touches[0].pageX,
        evt.touches[0].pageY
      );

      ctx12.strokeStyle = "#000";
      ctx12.lineWidth = 5;
      ctx12.stroke();
    }

  },
  end: function(evt) {
    this.started = false;
  }
};

// Touch Events
myCanvas12.addEventListener('touchstart', draw.start, false);
myCanvas12.addEventListener('touchend', draw.end, false);
myCanvas12.addEventListener('touchmove', draw.move, false);

// Disable Page Move
document.body.addEventListener('touchmove', function(evt) {
  evt.preventDefault();
}, false);

//-----------------------------------------------------------------------------------------------------------------------------

const myCanvas13 = document.getElementById("myCanvas13");
const ctx13 = myCanvas13.getContext("2d");

// Fill Window Width and Height
ctx13.width = myCanvas13.width = myCanvas13.clientWidth;
ctx13.height = myCanvas13.height = myCanvas13.clientHeight;

// Set Background Color
ctx13.fillStyle = "#fff";
ctx13.fillRect(0, 0, myCanvas13.width, myCanvas13.height);

// Mouse Event Handlers
if (myCanvas13) {
  var isDown = false;
  var canvasX, canvasY;
  ctx13.lineWidth = 5;

  $(myCanvas13)
    .mousedown(function(e) {
      isDown = true;
      ctx13.beginPath();
      canvasX = e.pageX - myCanvas13.offsetLeft;
      canvasY = e.pageY - myCanvas13.offsetTop;
      ctx13.moveTo(canvasX, canvasY);
    })
    .mousemove(function(e) {
      if (isDown !== false) {
        canvasX = e.pageX - myCanvas13.offsetLeft;
        canvasY = e.pageY - myCanvas13.offsetTop;
        ctx13.lineTo(canvasX, canvasY);
        ctx13.strokeStyle = "#000";
        ctx13.stroke();
      }
    })
    .mouseup(function(e) {
      isDown = false;
      ctx13.closePath();
    });
}

// Touch Events Handlers
draw = {
  started: false,
  start: function(evt) {

    ctx13.beginPath();
    ctx13.moveTo(
      evt.touches[0].pageX,
      evt.touches[0].pageY
    );

    this.started = true;

  },
  move: function(evt) {

    if (this.started) {
      ctx13.lineTo(
        evt.touches[0].pageX,
        evt.touches[0].pageY
      );

      ctx13.strokeStyle = "#000";
      ctx13.lineWidth = 5;
      ctx13.stroke();
    }

  },
  end: function(evt) {
    this.started = false;
  }
};

// Touch Events
myCanvas13.addEventListener('touchstart', draw.start, false);
myCanvas13.addEventListener('touchend', draw.end, false);
myCanvas13.addEventListener('touchmove', draw.move, false);

// Disable Page Move
document.body.addEventListener('touchmove', function(evt) {
  evt.preventDefault();
}, false);

//-----------------------------------------------------------------------------------------------------------------------------

const myCanvas14 = document.getElementById("myCanvas14");
const ctx14 = myCanvas14.getContext("2d");

// Fill Window Width and Height
ctx14.width = myCanvas14.width = myCanvas14.clientWidth;
ctx14.height = myCanvas14.height = myCanvas14.clientHeight;

// Set Background Color
ctx14.fillStyle = "#fff";
ctx14.fillRect(0, 0, myCanvas14.width, myCanvas14.height);

// Mouse Event Handlers
if (myCanvas14) {
  var isDown = false;
  var canvasX, canvasY;
  ctx14.lineWidth = 5;

  $(myCanvas14)
    .mousedown(function(e) {
      isDown = true;
      ctx14.beginPath();
      canvasX = e.pageX - myCanvas14.offsetLeft;
      canvasY = e.pageY - myCanvas14.offsetTop;
      ctx14.moveTo(canvasX, canvasY);
    })
    .mousemove(function(e) {
      if (isDown !== false) {
        canvasX = e.pageX - myCanvas14.offsetLeft;
        canvasY = e.pageY - myCanvas14.offsetTop;
        ctx14.lineTo(canvasX, canvasY);
        ctx14.strokeStyle = "#000";
        ctx14.stroke();
      }
    })
    .mouseup(function(e) {
      isDown = false;
      ctx14.closePath();
    });
}

// Touch Events Handlers
draw = {
  started: false,
  start: function(evt) {

    ctx14.beginPath();
    ctx14.moveTo(
      evt.touches[0].pageX,
      evt.touches[0].pageY
    );

    this.started = true;

  },
  move: function(evt) {

    if (this.started) {
      ctx14.lineTo(
        evt.touches[0].pageX,
        evt.touches[0].pageY
      );

      ctx14.strokeStyle = "#000";
      ctx14.lineWidth = 5;
      ctx14.stroke();
    }

  },
  end: function(evt) {
    this.started = false;
  }
};

// Touch Events
myCanvas14.addEventListener('touchstart', draw.start, false);
myCanvas14.addEventListener('touchend', draw.end, false);
myCanvas14.addEventListener('touchmove', draw.move, false);

// Disable Page Move
document.body.addEventListener('touchmove', function(evt) {
  evt.preventDefault();
}, false);

//-----------------------------------------------------------------------------------------------------------------------------

const myCanvas15 = document.getElementById("myCanvas15");
const ctx15 = myCanvas15.getContext("2d");

// Fill Window Width and Height
ctx15.width = myCanvas15.width = myCanvas15.clientWidth;
ctx15.height = myCanvas15.height = myCanvas15.clientHeight;

// Set Background Color
ctx15.fillStyle = "#fff";
ctx15.fillRect(0, 0, myCanvas15.width, myCanvas15.height);

// Mouse Event Handlers
if (myCanvas15) {
  var isDown = false;
  var canvasX, canvasY;
  ctx15.lineWidth = 5;

  $(myCanvas15)
    .mousedown(function(e) {
      isDown = true;
      ctx15.beginPath();
      canvasX = e.pageX - myCanvas15.offsetLeft;
      canvasY = e.pageY - myCanvas15.offsetTop;
      ctx15.moveTo(canvasX, canvasY);
    })
    .mousemove(function(e) {
      if (isDown !== false) {
        canvasX = e.pageX - myCanvas15.offsetLeft;
        canvasY = e.pageY - myCanvas15.offsetTop;
        ctx15.lineTo(canvasX, canvasY);
        ctx15.strokeStyle = "#000";
        ctx15.stroke();
      }
    })
    .mouseup(function(e) {
      isDown = false;
      ctx15.closePath();
    });
}

// Touch Events Handlers
draw = {
  started: false,
  start: function(evt) {

    ctx15.beginPath();
    ctx15.moveTo(
      evt.touches[0].pageX,
      evt.touches[0].pageY
    );

    this.started = true;

  },
  move: function(evt) {

    if (this.started) {
      ctx15.lineTo(
        evt.touches[0].pageX,
        evt.touches[0].pageY
      );

      ctx15.strokeStyle = "#000";
      ctx15.lineWidth = 5;
      ctx15.stroke();
    }

  },
  end: function(evt) {
    this.started = false;
  }
};

// Touch Events
myCanvas15.addEventListener('touchstart', draw.start, false);
myCanvas15.addEventListener('touchend', draw.end, false);
myCanvas15.addEventListener('touchmove', draw.move, false);

// Disable Page Move
document.body.addEventListener('touchmove', function(evt) {
  evt.preventDefault();
}, false);

//-----------------------------------------------------------------------------------------------------------------------------

const myCanvas16 = document.getElementById("myCanvas16");
const ctx16 = myCanvas16.getContext("2d");

// Fill Window Width and Height
ctx16.width = myCanvas16.width = myCanvas16.clientWidth;
ctx16.height = myCanvas16.height = myCanvas16.clientHeight;

// Set Background Color
ctx16.fillStyle = "#fff";
ctx16.fillRect(0, 0, myCanvas16.width, myCanvas16.height);

// Mouse Event Handlers
if (myCanvas16) {
  var isDown = false;
  var canvasX, canvasY;
  ctx16.lineWidth = 5;

  $(myCanvas16)
    .mousedown(function(e) {
      isDown = true;
      ctx16.beginPath();
      canvasX = e.pageX - myCanvas16.offsetLeft;
      canvasY = e.pageY - myCanvas16.offsetTop;
      ctx16.moveTo(canvasX, canvasY);
    })
    .mousemove(function(e) {
      if (isDown !== false) {
        canvasX = e.pageX - myCanvas16.offsetLeft;
        canvasY = e.pageY - myCanvas16.offsetTop;
        ctx16.lineTo(canvasX, canvasY);
        ctx16.strokeStyle = "#000";
        ctx16.stroke();
      }
    })
    .mouseup(function(e) {
      isDown = false;
      ctx16.closePath();
    });
}

// Touch Events Handlers
draw = {
  started: false,
  start: function(evt) {

    ctx16.beginPath();
    ctx16.moveTo(
      evt.touches[0].pageX,
      evt.touches[0].pageY
    );

    this.started = true;

  },
  move: function(evt) {

    if (this.started) {
      ctx16.lineTo(
        evt.touches[0].pageX,
        evt.touches[0].pageY
      );

      ctx16.strokeStyle = "#000";
      ctx16.lineWidth = 5;
      ctx16.stroke();
    }

  },
  end: function(evt) {
    this.started = false;
  }
};

// Touch Events
myCanvas16.addEventListener('touchstart', draw.start, false);
myCanvas16.addEventListener('touchend', draw.end, false);
myCanvas16.addEventListener('touchmove', draw.move, false);

// Disable Page Move
document.body.addEventListener('touchmove', function(evt) {
  evt.preventDefault();
}, false);

//-----------------------------------------------------------------------------------------------------------------------------

const myCanvas17 = document.getElementById("myCanvas17");
const ctx17 = myCanvas17.getContext("2d");

// Fill Window Width and Height
ctx17.width = myCanvas17.width = myCanvas17.clientWidth;
ctx17.height = myCanvas17.height = myCanvas17.clientHeight;

// Set Background Color
ctx17.fillStyle = "#fff";
ctx17.fillRect(0, 0, myCanvas17.width, myCanvas17.height);

// Mouse Event Handlers
if (myCanvas17) {
  var isDown = false;
  var canvasX, canvasY;
  ctx17.lineWidth = 5;

  $(myCanvas17)
    .mousedown(function(e) {
      isDown = true;
      ctx17.beginPath();
      canvasX = e.pageX - myCanvas17.offsetLeft;
      canvasY = e.pageY - myCanvas17.offsetTop;
      ctx17.moveTo(canvasX, canvasY);
    })
    .mousemove(function(e) {
      if (isDown !== false) {
        canvasX = e.pageX - myCanvas17.offsetLeft;
        canvasY = e.pageY - myCanvas17.offsetTop;
        ctx17.lineTo(canvasX, canvasY);
        ctx17.strokeStyle = "#000";
        ctx17.stroke();
      }
    })
    .mouseup(function(e) {
      isDown = false;
      ctx17.closePath();
    });
}

// Touch Events Handlers
draw = {
  started: false,
  start: function(evt) {

    ctx17.beginPath();
    ctx17.moveTo(
      evt.touches[0].pageX,
      evt.touches[0].pageY
    );

    this.started = true;

  },
  move: function(evt) {

    if (this.started) {
      ctx17.lineTo(
        evt.touches[0].pageX,
        evt.touches[0].pageY
      );

      ctx17.strokeStyle = "#000";
      ctx17.lineWidth = 5;
      ctx17.stroke();
    }

  },
  end: function(evt) {
    this.started = false;
  }
};

// Touch Events
myCanvas17.addEventListener('touchstart', draw.start, false);
myCanvas17.addEventListener('touchend', draw.end, false);
myCanvas17.addEventListener('touchmove', draw.move, false);

// Disable Page Move
document.body.addEventListener('touchmove', function(evt) {
  evt.preventDefault();
}, false);

//-----------------------------------------------------------------------------------------------------------------------------

const myCanvas18 = document.getElementById("myCanvas18");
const ctx18 = myCanvas18.getContext("2d");

// Fill Window Width and Height
ctx18.width = myCanvas18.width = myCanvas18.clientWidth;
ctx18.height = myCanvas18.height = myCanvas18.clientHeight;

// Set Background Color
ctx18.fillStyle = "#fff";
ctx18.fillRect(0, 0, myCanvas18.width, myCanvas18.height);

// Mouse Event Handlers
if (myCanvas18) {
  var isDown = false;
  var canvasX, canvasY;
  ctx18.lineWidth = 5;

  $(myCanvas18)
    .mousedown(function(e) {
      isDown = true;
      ctx18.beginPath();
      canvasX = e.pageX - myCanvas18.offsetLeft;
      canvasY = e.pageY - myCanvas18.offsetTop;
      ctx18.moveTo(canvasX, canvasY);
    })
    .mousemove(function(e) {
      if (isDown !== false) {
        canvasX = e.pageX - myCanvas18.offsetLeft;
        canvasY = e.pageY - myCanvas18.offsetTop;
        ctx18.lineTo(canvasX, canvasY);
        ctx18.strokeStyle = "#000";
        ctx18.stroke();
      }
    })
    .mouseup(function(e) {
      isDown = false;
      ctx18.closePath();
    });
}

// Touch Events Handlers
draw = {
  started: false,
  start: function(evt) {

    ctx18.beginPath();
    ctx18.moveTo(
      evt.touches[0].pageX,
      evt.touches[0].pageY
    );

    this.started = true;

  },
  move: function(evt) {

    if (this.started) {
      ctx18.lineTo(
        evt.touches[0].pageX,
        evt.touches[0].pageY
      );

      ctx18.strokeStyle = "#000";
      ctx18.lineWidth = 5;
      ctx18.stroke();
    }

  },
  end: function(evt) {
    this.started = false;
  }
};

// Touch Events
myCanvas18.addEventListener('touchstart', draw.start, false);
myCanvas18.addEventListener('touchend', draw.end, false);
myCanvas18.addEventListener('touchmove', draw.move, false);

// Disable Page Move
document.body.addEventListener('touchmove', function(evt) {
  evt.preventDefault();
}, false);

//-----------------------------------------------------------------------------------------------------------------------------

const myCanvas19 = document.getElementById("myCanvas19");
const ctx19 = myCanvas19.getContext("2d");

// Fill Window Width and Height
ctx19.width = myCanvas19.width = myCanvas19.clientWidth;
ctx19.height = myCanvas19.height = myCanvas19.clientHeight;

// Set Background Color
ctx19.fillStyle = "#fff";
ctx19.fillRect(0, 0, myCanvas19.width, myCanvas19.height);

// Mouse Event Handlers
if (myCanvas19) {
  var isDown = false;
  var canvasX, canvasY;
  ctx19.lineWidth = 5;

  $(myCanvas19)
    .mousedown(function(e) {
      isDown = true;
      ctx19.beginPath();
      canvasX = e.pageX - myCanvas19.offsetLeft;
      canvasY = e.pageY - myCanvas19.offsetTop;
      ctx19.moveTo(canvasX, canvasY);
    })
    .mousemove(function(e) {
      if (isDown !== false) {
        canvasX = e.pageX - myCanvas19.offsetLeft;
        canvasY = e.pageY - myCanvas19.offsetTop;
        ctx19.lineTo(canvasX, canvasY);
        ctx19.strokeStyle = "#000";
        ctx19.stroke();
      }
    })
    .mouseup(function(e) {
      isDown = false;
      ctx19.closePath();
    });
}

// Touch Events Handlers
draw = {
  started: false,
  start: function(evt) {

    ctx19.beginPath();
    ctx19.moveTo(
      evt.touches[0].pageX,
      evt.touches[0].pageY
    );

    this.started = true;

  },
  move: function(evt) {

    if (this.started) {
      ctx19.lineTo(
        evt.touches[0].pageX,
        evt.touches[0].pageY
      );

      ctx19.strokeStyle = "#000";
      ctx19.lineWidth = 5;
      ctx19.stroke();
    }

  },
  end: function(evt) {
    this.started = false;
  }
};

// Touch Events
myCanvas19.addEventListener('touchstart', draw.start, false);
myCanvas19.addEventListener('touchend', draw.end, false);
myCanvas19.addEventListener('touchmove', draw.move, false);

// Disable Page Move
document.body.addEventListener('touchmove', function(evt) {
  evt.preventDefault();
}, false);

//-----------------------------------------------------------------------------------------------------------------------------

const myCanvas20 = document.getElementById("myCanvas20");
const ctx20 = myCanvas20.getContext("2d");

// Fill Window Width and Height
ctx20.width = myCanvas20.width = myCanvas20.clientWidth;
ctx20.height = myCanvas20.height = myCanvas20.clientHeight;

// Set Background Color
ctx20.fillStyle = "#fff";
ctx20.fillRect(0, 0, myCanvas20.width, myCanvas20.height);

// Mouse Event Handlers
if (myCanvas20) {
  var isDown = false;
  var canvasX, canvasY;
  ctx20.lineWidth = 5;

  $(myCanvas20)
    .mousedown(function(e) {
      isDown = true;
      ctx20.beginPath();
      canvasX = e.pageX - myCanvas20.offsetLeft;
      canvasY = e.pageY - myCanvas20.offsetTop;
      ctx20.moveTo(canvasX, canvasY);
    })
    .mousemove(function(e) {
      if (isDown !== false) {
        canvasX = e.pageX - myCanvas20.offsetLeft;
        canvasY = e.pageY - myCanvas20.offsetTop;
        ctx20.lineTo(canvasX, canvasY);
        ctx20.strokeStyle = "#000";
        ctx20.stroke();
      }
    })
    .mouseup(function(e) {
      isDown = false;
      ctx20.closePath();
    });
}

// Touch Events Handlers
draw = {
  started: false,
  start: function(evt) {

    ctx20.beginPath();
    ctx20.moveTo(
      evt.touches[0].pageX,
      evt.touches[0].pageY
    );

    this.started = true;

  },
  move: function(evt) {

    if (this.started) {
      ctx20.lineTo(
        evt.touches[0].pageX,
        evt.touches[0].pageY
      );

      ctx20.strokeStyle = "#000";
      ctx20.lineWidth = 5;
      ctx20.stroke();
    }

  },
  end: function(evt) {
    this.started = false;
  }
};

// Touch Events
myCanvas20.addEventListener('touchstart', draw.start, false);
myCanvas20.addEventListener('touchend', draw.end, false);
myCanvas20.addEventListener('touchmove', draw.move, false);

// Disable Page Move
document.body.addEventListener('touchmove', function(evt) {
  evt.preventDefault();
}, false);

//-----------------------------------------------------------------------------------------------------------------------------

const myCanvas21 = document.getElementById("myCanvas21");
const ctx21 = myCanvas21.getContext("2d");

// Fill Window Width and Height
ctx21.width = myCanvas21.width = myCanvas21.clientWidth;
ctx21.height = myCanvas21.height = myCanvas21.clientHeight;

// Set Background Color
ctx21.fillStyle = "#fff";
ctx21.fillRect(0, 0, myCanvas21.width, myCanvas21.height);

// Mouse Event Handlers
if (myCanvas21) {
  var isDown = false;
  var canvasX, canvasY;
  ctx21.lineWidth = 5;

  $(myCanvas21)
    .mousedown(function(e) {
      isDown = true;
      ctx21.beginPath();
      canvasX = e.pageX - myCanvas21.offsetLeft;
      canvasY = e.pageY - myCanvas21.offsetTop;
      ctx21.moveTo(canvasX, canvasY);
    })
    .mousemove(function(e) {
      if (isDown !== false) {
        canvasX = e.pageX - myCanvas21.offsetLeft;
        canvasY = e.pageY - myCanvas21.offsetTop;
        ctx21.lineTo(canvasX, canvasY);
        ctx21.strokeStyle = "#000";
        ctx21.stroke();
      }
    })
    .mouseup(function(e) {
      isDown = false;
      ctx21.closePath();
    });
}

// Touch Events Handlers
draw = {
  started: false,
  start: function(evt) {

    ctx21.beginPath();
    ctx21.moveTo(
      evt.touches[0].pageX,
      evt.touches[0].pageY
    );

    this.started = true;

  },
  move: function(evt) {

    if (this.started) {
      ctx21.lineTo(
        evt.touches[0].pageX,
        evt.touches[0].pageY
      );

      ctx21.strokeStyle = "#000";
      ctx21.lineWidth = 5;
      ctx21.stroke();
    }

  },
  end: function(evt) {
    this.started = false;
  }
};

// Touch Events
myCanvas21.addEventListener('touchstart', draw.start, false);
myCanvas21.addEventListener('touchend', draw.end, false);
myCanvas21.addEventListener('touchmove', draw.move, false);

// Disable Page Move
document.body.addEventListener('touchmove', function(evt) {
  evt.preventDefault();
}, false);

//-----------------------------------------------------------------------------------------------------------------------------

const myCanvas22 = document.getElementById("myCanvas22");
const ctx22 = myCanvas22.getContext("2d");

// Fill Window Width and Height
ctx22.width = myCanvas22.width = myCanvas22.clientWidth;
ctx22.height = myCanvas22.height = myCanvas22.clientHeight;

// Set Background Color
ctx22.fillStyle = "#fff";
ctx22.fillRect(0, 0, myCanvas22.width, myCanvas22.height);

// Mouse Event Handlers
if (myCanvas22) {
  var isDown = false;
  var canvasX, canvasY;
  ctx22.lineWidth = 5;

  $(myCanvas22)
    .mousedown(function(e) {
      isDown = true;
      ctx22.beginPath();
      canvasX = e.pageX - myCanvas22.offsetLeft;
      canvasY = e.pageY - myCanvas22.offsetTop;
      ctx22.moveTo(canvasX, canvasY);
    })
    .mousemove(function(e) {
      if (isDown !== false) {
        canvasX = e.pageX - myCanvas22.offsetLeft;
        canvasY = e.pageY - myCanvas22.offsetTop;
        ctx22.lineTo(canvasX, canvasY);
        ctx22.strokeStyle = "#000";
        ctx22.stroke();
      }
    })
    .mouseup(function(e) {
      isDown = false;
      ctx22.closePath();
    });
}

// Touch Events Handlers
draw = {
  started: false,
  start: function(evt) {

    ctx22.beginPath();
    ctx22.moveTo(
      evt.touches[0].pageX,
      evt.touches[0].pageY
    );

    this.started = true;

  },
  move: function(evt) {

    if (this.started) {
      ctx22.lineTo(
        evt.touches[0].pageX,
        evt.touches[0].pageY
      );

      ctx22.strokeStyle = "#000";
      ctx22.lineWidth = 5;
      ctx22.stroke();
    }

  },
  end: function(evt) {
    this.started = false;
  }
};

// Touch Events
myCanvas22.addEventListener('touchstart', draw.start, false);
myCanvas22.addEventListener('touchend', draw.end, false);
myCanvas22.addEventListener('touchmove', draw.move, false);

// Disable Page Move
document.body.addEventListener('touchmove', function(evt) {
  evt.preventDefault();
}, false);