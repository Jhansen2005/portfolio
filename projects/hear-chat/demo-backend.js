/* ---------------------------------------------------------------------------
   demo-backend.js

   Hear Chat was built against an Express + MySQL backend (backend/server.js).
   Static hosting such as GitHub Pages cannot run it, so every call to /api/*
   would 404 and the app would load empty.

   This file stands in for that backend. It intercepts fetch() calls to /api/*
   and answers them from the seed rows in hearchat.sql, so the published demo
   behaves like the real thing. Messages you send are kept in memory for the
   session. Nothing else in the project is changed.

   Loaded before script.js. Delete this file and the <script> tag that pulls it
   in to run against the real server again.
--------------------------------------------------------------------------- */
(function () {
  'use strict';

  var AVATAR = 'asset/icon-dummy.png';

  var user = { id: 1, name: 'Jhansen', avatar: AVATAR, status: 'online' };

  var contacts = [
    { name: 'Erlangga',     avatar: AVATAR, status: 'online',  lastMessage: 'Let me think about it.',            time: '5:57 PM', unread: 3 },
    { name: 'JingkoisReal', avatar: AVATAR, status: 'offline', lastMessage: "I'll be there in 10 minutes.",      time: '6:42 PM', unread: 1 },
    { name: 'Kelra',        avatar: AVATAR, status: 'offline', lastMessage: 'hello',                             time: '6:07 PM', unread: 0 },
    { name: 'JingkoGod',    avatar: AVATAR, status: 'offline', lastMessage: "I'll check and get back to you.",   time: '6:31 PM', unread: 0 }
  ];

  var messages = {
    'Erlangga': [
      { from: 'them', text: "Hey, how's it going?",            time: '10:30 AM' },
      { from: 'me',   text: "Hi Erlangga! I'm doing well…",    time: '10:32 AM' }
    ],
    'JingkoisReal': [
      { from: 'them', text: "Hey, how's it going?",             time: '10:30 AM' },
      { from: 'me',   text: "Hi JingkoisReal! I'm doing well…", time: '10:32 AM' }
    ],
    'Kelra': [
      { from: 'them', text: "Hey, how's it going?",         time: '10:30 AM' },
      { from: 'me',   text: "Hi Kelra! I'm doing well…",    time: '10:32 AM' }
    ],
    'JingkoGod': [
      { from: 'them', text: "Hey, how's it going?",                  time: '10:30 AM' },
      { from: 'me',   text: "Hi JingkoGod! I'm doing well…",         time: '10:32 AM' },
      { from: 'me',   text: 'hey how is it going',                   time: '6:31 PM'  },
      { from: 'them', text: "I'll check and get back to you.",       time: '6:31 PM'  }
    ]
  };

  function json(body, status) {
    return new Response(JSON.stringify(body), {
      status: status || 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  function text(body, status) {
    return new Response(body, {
      status: status || 200,
      headers: { 'Content-Type': 'text/plain' }
    });
  }

  function parse(input) {
    var raw = typeof input === 'string' ? input : (input && input.url) || '';
    // relative, absolute or full URL - we only care about the path and query
    var url;
    try {
      url = new URL(raw, window.location.href);
    } catch (e) {
      return null;
    }
    return url;
  }

  function readBody(init, input) {
    var raw = (init && init.body) || (input && input.body) || null;
    if (typeof raw !== 'string') return {};
    try { return JSON.parse(raw); } catch (e) { return {}; }
  }

  var realFetch = window.fetch ? window.fetch.bind(window) : null;

  window.fetch = function (input, init) {
    var url = parse(input);
    var path = url ? url.pathname : '';

    if (path.indexOf('/api/') === -1) {
      return realFetch
        ? realFetch(input, init)
        : Promise.reject(new Error('fetch unavailable'));
    }

    // --- GET /api/get-all-data
    if (path.indexOf('/api/get-all-data') !== -1) {
      return Promise.resolve(json({
        user: user,
        contacts: contacts.map(function (c) { return Object.assign({}, c); })
      }));
    }

    // --- GET /api/get-messages?name=...
    if (path.indexOf('/api/get-messages') !== -1) {
      var who = url.searchParams.get('name');
      if (!who || !messages[who]) return Promise.resolve(text('Contact not found', 404));
      return Promise.resolve(json(messages[who].slice()));
    }

    // --- POST /api/save-message
    if (path.indexOf('/api/save-message') !== -1) {
      var msg = readBody(init, input);
      if (!msg.to || !messages[msg.to]) return Promise.resolve(text('Contact not found', 500));
      messages[msg.to].push({ from: msg.from || 'me', text: msg.text, time: msg.time });
      for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].name === msg.to) {
          contacts[i].lastMessage = msg.text;
          contacts[i].time = msg.time;
          break;
        }
      }
      return Promise.resolve(text('Message saved'));
    }

    // --- POST /api/contact
    if (path.indexOf('/api/contact') !== -1) {
      var payload = readBody(init, input);
      return Promise.resolve(json({ message: 'Contact info received!', data: payload }));
    }

    return Promise.resolve(text('Not found', 404));
  };
})();
