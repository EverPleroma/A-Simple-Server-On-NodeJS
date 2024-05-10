<p>This is a simple server using the core <code> node:http</code> module that can handle multiple concurrent requests. </p>

<p>Each request responds with a message after a random delay (simulating some asynchronous operation) without blocking the server.</p>
 
<p>The server is also configured to handle <strong> CORS. </strong> </p>

<p> A <strong> GET </strong> route is provided that when hit, returns information about some of the user’s CPU and OS </p>