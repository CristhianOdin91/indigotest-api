<h1>To Do List API</h1>

<div>
	<p>Servicios web para aplicación To Do List</p>
</div>

<h2>Pasos para levantar un ambiente local</h2>

<div>
	<ol>
		<li>Instalar dependencias con npm o yarn <code>npm install</code></li>
		<li>Crear un archivo para variables de entorno, éste debe tener el nombre <code>.env</code> y estar situado en la raíz del proyecto, si las configuraciones son correctas puede cambiarse el nombre al archivo <code>.env.example</code></li>
		<li>El puerto 3000 del servidor local debe estar libre</li>
		<li>Asegurarse de que el servidor de MongoDB se encuentre en funcionamiento y que la variable de entorno para hacer la conexión sea la correcta</li>
		<li>Iniciar el servidor con npm o yarn <code>npm start</code></li>
	</ol>
</div>

<h2>Endpoints disponibles</h2>

<div>
	<table>
		<thead>
			<tr>
				<th>Path</th>
				<th>Http Method</th>
				<th>Headers</th>
				<th>Body</th>
				<th>Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>/api/v1/session</td>
				<td>POST</td>
				<td>-</td>
				<td>-</td>
				<td>Inicia un token de sesión</td>
			</tr>
			<tr>
				<td>/api/v1/task</td>
				<td>POST</td>
				<td>{ Content-Type:application/json, Authorization: Bearer SESSION_ID }</td>
				<td>{"name": "string"}</td>
				<td>Crea una nueva tarea</td>
			</tr>
			<tr>
				<td>/api/v1/session</td>
				<td>GET</td>
				<td>{ Authorization: Bearer SESSION_ID }</td>
				<td>-</td>
				<td>Devuelve todas las tareas asociadas al token de sesión</td>
			</tr>
			<tr>
				<td>/api/v1/task/:id</td>
				<td>PUT</td>
				<td>{ Content-Type:application/json, Authorization: Bearer SESSION_ID }</td>
				<td>{"name": "string"}</td>
				<td>Actualiza el nombre de una nueva tarea</td>
			</tr>
			<tr>
				<td>/api/v1/task/:id</td>
				<td>DELETE</td>
				<td>{ Authorization: Bearer SESSION_ID }</td>
				<td>-</td>
				<td>Elimina una nueva tarea</td>
			</tr>
			<tr>
				<td>/api/v1/task/:id</td>
				<td>PATCH</td>
				<td>{ Authorization: Bearer SESSION_ID }</td>
				<td>-</td>
				<td>Alterna el estado de la tarea</td>
			</tr>
			<tr>
				<td>/api/v1/task/search</td>
				<td>POST</td>
				<td>{ Content-Type:application/json, Authorization: Bearer SESSION_ID }</td>
				<td>{"name": "string"}</td>
				<td>Busca tareas que coincidan con el nombre proporcionado</td>
			</tr>
		</tbody>
	</table>
</div>

<h2>Consideraciones adicionales</h2>

<div>
	<p>Probado en las versiones:</p>
	<p><strong>NodeJs: </strong>8.9.4</p>
	<p><strong>MongoDB: </strong>3.6.2</p>
</div>
