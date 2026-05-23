---
layout: post
title: Requirements
permalink: /requirements
codemirror: true
---

# Project Requirements Evidence Matrix

This page connects the rubric to real code in the C++ client repo `community` and the Java backend repo `community-backend`.

## Combined Requirements Table

| Learning Objective | Project Evidence Required |
|---------------------------|--------------------------|
| **Data Structures** | |
| Collections | our project uses things like `MapTreeLib`, `TexEnvJIT`, and `CTexEnv`; `community-backend` uses `ArrayList`, `List`, `Set`, and `Collectors` in `GameController` and `GameService` to collect and store things for the game |
| Lists | <a id="row-list-java"></a>`Lists`<br><a href="#runner-requirements-list-java">Jump to code runner</a> We use lists in the project to save multiple things, for example: list of tasks, rooms, multiplayer room code, etc.. ![Tasks](images/tasks.png)|
| Stacks/Queues | <a id="row-stackqueue-java"></a>`Stacks/Queues`<br><a href="#runner-requirements-stackqueue-java">Jump to code runner</a> We used stacks and Ques a lot within the backend saving data to the SQLite databse for tables for player location (for multiplayer/animations), data collection/orginization (like tasks completed/in what rooms/who did the most in each room/in total) and more ![Database](images/database.png)|
| Trees | <a id="row-tree-java"></a>`Trees`<br><a href="#runner-requirements-tree-java">Jump to code runner</a> we use trees a lot in organizing and sorting our data for things (again) like the task completion |
| Sets | <a id="row-set-java"></a>`Sets`<br><a href="#runner-requirements-set-java">Jump to code runner</a> we use sets for things like the notification system, where different different stuff is shown based on whether its toggled on or not and differnet data is stored (like interaction with the notification system not being saved when toggled off) |
| Dictionaries/Maps | our main file `index.js` uses key helpers (such as: `computeKey0`, `computeKey1`, `recomputeKey`, `invalidateKey`) for cached lookups because the backend does keyed SQL lookups by the room code, player ID, and task name (used to print the data on screen as dom elements and be able to lookup the specific values we want) |
| Graphs | [jump to coderunner](#runner-requirements-graph-java)  we use `traverseState`, `genPassLines`, and `genCombinerLines` in the backend to link stuff like room/member/player records with SQL joins |
| **Algorithms** | |
| Searching | <a id="row-search-java"></a>`Searching`<br><a href="#runner-requirements-search-java">Jump to code runner</a> we use the searching algorithm to locate specific values to present on screen as dom elements depending on what the user selects. For example if they are looking only for who completed tasks in room 2 we use searching algoritms to look for that specific room|
| Sorting | <a id="row-sort-java"></a>`Sorting`<br><a href="#runner-requirements-sort-java">Jump to code runner</a> One way we use sorting in our game is with the tasks. Tasks need to be sorted into different 2d arrays for completed tasks and uncompleted to remove redundancies in assigning tasks. That's one way we use sorting in our game|
| Hashing | <a id="row-hash-java"></a>`Hashing`<br><a href="#runner-requirements-hash-java">Jump to code runner</a> We use hashing to convert letters into a math algoritm. We use this within the multiplayer system, because everytime multiplayer is initiated a code is shown on screen for the room code, we use hashing to send this to computers to recieve inputs on both ends.|
| Algorithm Analysis | <a id="row-algo-java"></a>`Algorithm Analysis`<br><a href="#runner-requirements-algo-java">Jump to code runner</a> We use algoritmn anaylsis in our game in the room system. So the game determines the shortest way to align the camera when the player enters a new room. We also use this to optimize image rendering to maintain the speed of the game acros devices and within multiplayer.|
| **Object-Oriented Design** | |
| Abstraction | our game uses modules and contracts to hide the messy parts; to be more specific, our backend uses interfaces and abstract types to define behavior, and on the game UI end we made the games easy/quick to complete hiding the other 2d arrays and data collection that goes into it.|
| Encapsulation | Our game uses encapsulation to bundle together data fromthe same methods/classes. For example same tasks, or tasks completed in the same room, or same charecter completing tasks, inorder to organize data and make it easy to interpret. Additionally our game backend use inheritance to extend base behavior where it makes sense (like `Entity` → `Player`/`NPC`) |
| Polymorphism | our backend utalizes a polymorphic aproach so that it can sortt through different interfaces and method overrides. For example types of tasks/task completion room entering, tiles within the tile editor, and more. |
| Design Patterns | Our game oasis uses modular separation and backend leans on MVC/Repository-style structure. Additionally we organize and maintain our game by spliting up files into different folders to make it easy to find things, and by not overcluttering a single file/folder.  |
| **Software Development** | |
| Version Control | Both repos use Git with regular commits and branch history, and we maintain constant communication to remove merge error issues, and to maintain an up to date version so we can both stay knowledgable on what the other is doing/work together. Additionally our game maintains its more up to date version on the deployed version (on our ocs page) through the use of an iframe web assembly. |
| Testing | We regularly test our code through most/every aspect of the game to maintain consistency and avoid unwanted supprises. Additionally (after the game engine v1-v1.1 issue in last project) we try not to commit removing things untill we are sure about our changes and that they won't break anything. Additionally our front and backend includes many error catches and console logs to catch errors as we run the gain to pinpoint any potential bugs. |
| Build Tools | Community repo uses a `Makefile` to build scripts and while the backend uses a spring repo, which utalizes Maven for dependency-managed builds |
| Debugging | Community repo uses logging/debug notes and backend uses logging/config settings for troubleshooting. Additionally we strive to catch errors through many error handing functions and console logs to stay up to date in what is happening behind the scenes of the code. |
| API Development | Our file `GameController` exposes REST endpoints for players, scores, rooms, presence, and leaderboard data, with `validateRequest()` and `readJsonRequest()` handling input checks |
| Database Integration | `GameService` saves SQLite-backed players, scores, multiplayer rooms, presence, and task data using `INSERT OR IGNORE`, `ON CONFLICT ... DO UPDATE`, and SQL joins! |
| **Deployment** | |
| Docker | Community repo and backend repo provide Dockerfile and `docker-compose.yml` support for local testing and deployment |
| DNS Configuration | DNS is configured with our local hose 8080 and with our domain name oasis, the DNS is used for our web assembly (which is the thing we use to display our game on website like OCS) ![Deployed](images/deployed.png)|
| nginx | We have `nginx` within our repo and use it to reroute traffic and conserve system resources|
| CI/CD | CI/CD is our automated build/deploy workflows (AKA GitHub Actions) |
| **Documentation** | |
| Code Comments | our oasis game's frontend and backend repos include JavaDoc/inline comments for APIs/tricky logic so that when we hand it off to the company/others they will be able to understand our code|
| API Documentation | We have a readme in the back and frontend of the game with up to date doccumentation and stuff about the game |
| Help System | We created a notfication system that walks users through the game/ |
| Blog Portfolio | We kept up to date issues on kanban boards and blogs (like this one) throughout the project to track our progress and stay on task <br>![Kanban Board](/images/kanban.png) |
| **Personal/Social Relevance** | |
| Project Impact | Our project is for the `san diego oasis` nonprofit orginization. Our intention with this project is to inspire people to help the lonley elderly by starting simple and doing little tasks like the ones in our game. it is meant to inspire interaction with our orginization to help solve this issue. !(images/oasis.png)[oasis]|
| Ethical Considerations | Our game dosen't rely on login/have any personal info, but some ethical concerns are lack of outreach not spreading our message, and limited ideas for action to take to solve this problem, since this is only one given option.|

## Interactive Java Examples

The following short Java examples are embedded so reviewers can run and experiment with core algorithm and data-structure concepts directly from this page.

{% capture challenge_search %}Linear search example (Java){% endcapture %}
{% capture code_search %}
public class SearchDemo {
	public static int linearSearch(int[] arr, int target) {
		for (int i = 0; i < arr.length; i++) {
			if (arr[i] == target) return i;
		}
		return -1;
	}
	public static String run() {
		int[] a = {3, 5, 7, 9, 11};
		return Integer.toString(linearSearch(a, 9));
	}
	public static void main(String[] args) { System.out.println(run()); }
}
SearchDemo.main(null);
{% endcapture %}

{% capture out_search %}3{% endcapture %}
{% include code-runner.html
	runner_id="requirements-search-java"
	language="java"
	challenge=challenge_search
	code=code_search
	output=out_search
	row_anchor="row-search-java"
%}
<p><a href="#row-search-java">Back to matched row</a></p>

{% capture challenge_sort %}Sorting demo using Arrays.sort (Java){% endcapture %}
{% capture code_sort %}
public class SortDemo {
	public static String run() {
		int[] a = {5, 2, 9, 1, 5};
		java.util.Arrays.sort(a);
		StringBuilder sb = new StringBuilder();
		for (int v : a) sb.append(v).append(' ');
		return sb.toString();
	}
	public static void main(String[] args) { System.out.println(run()); }
}
SortDemo.main(null);
{% endcapture %}

{% capture out_sort %}1 2 5 5 9 {% endcapture %}
{% include code-runner.html
	runner_id="requirements-sort-java"
	language="java"
	challenge=challenge_sort
	code=code_sort
	output=out_sort
	row_anchor="row-sort-java"
%}
<p><a href="#row-sort-java">Back to matched row</a></p>

{% capture challenge_hash %}HashMap example (Java){% endcapture %}
{% capture code_hash %}
public class HashDemo {
	public static String run() {
		java.util.Map<String, Integer> m = new java.util.HashMap<>();
		m.put("alice", 10);
		m.put("bob", 20);
		return Integer.toString(m.get("alice"));
	}
	public static void main(String[] args) { System.out.println(run()); }
}
HashDemo.main(null);
{% endcapture %}

{% capture out_hash %}10{% endcapture %}
{% include code-runner.html
	runner_id="requirements-hash-java"
	language="java"
	challenge=challenge_hash
	code=code_hash
	output=out_hash
	row_anchor="row-hash-java"
%}
<p><a href="#row-hash-java">Back to matched row</a></p>

{% capture challenge_lists %}ArrayList example (Java){% endcapture %}
{% capture code_lists %}
public class ListDemo {
	public static String run() {
		java.util.List<Integer> l = new java.util.ArrayList<>();
		l.add(1); l.add(2); l.add(2); l.add(3);
		int sum = 0; for (int v : l) sum += v;
		return "Sum: " + sum + " Size: " + l.size();
	}
	public static void main(String[] args) { System.out.println(run()); }
}
ListDemo.main(null);
{% endcapture %}

{% capture out_lists %}Sum: 8 Size: 4{% endcapture %}
{% include code-runner.html
	runner_id="requirements-list-java"
	language="java"
	challenge=challenge_lists
	code=code_lists
	output=out_lists
	row_anchor="row-list-java"
%}
<p><a href="#row-list-java">Back to matched row</a></p>

{% capture challenge_sets %}HashSet example (Java){% endcapture %}
{% capture code_sets %}
public class SetDemo {
	public static String run() {
		java.util.Set<Integer> s = new java.util.HashSet<>();
		s.add(1); s.add(2); s.add(2); s.add(3);
		return "Set size: " + s.size() + " contains 2: " + s.contains(2);
	}
	public static void main(String[] args) { System.out.println(run()); }
}
SetDemo.main(null);
{% endcapture %}

{% capture out_sets %}Set size: 3 contains 2: true{% endcapture %}
{% include code-runner.html
	runner_id="requirements-set-java"
	language="java"
	challenge=challenge_sets
	code=code_sets
	output=out_sets
	row_anchor="row-set-java"
%}
<p><a href="#row-set-java">Back to matched row</a></p>

{% capture challenge_stackqueue %}Stack & Queue example (Java){% endcapture %}
{% capture code_stackqueue %}
public class StackQueueDemo {
	public static String run() {
		StringBuilder sb = new StringBuilder();
		java.util.Deque<Integer> stack = new java.util.ArrayDeque<>();
		stack.push(1); stack.push(2); stack.push(3);
		sb.append("Stack pop: ");
		while (!stack.isEmpty()) sb.append(stack.pop()).append(' ');
		sb.append('\n');

		java.util.Queue<Integer> q = new java.util.ArrayDeque<>();
		q.add(10); q.add(20); q.add(30);
		sb.append("Queue poll: ");
		while (!q.isEmpty()) sb.append(q.poll()).append(' ');
		return sb.toString();
	}
	public static void main(String[] args) { System.out.println(run()); }
}
StackQueueDemo.main(null);
{% endcapture %}

{% capture out_stackqueue %}Stack pop: 3 2 1 
Queue poll: 10 20 30 {% endcapture %}
{% include code-runner.html
	runner_id="requirements-stackqueue-java"
	language="java"
	challenge=challenge_stackqueue
	code=code_stackqueue
	output=out_stackqueue
	row_anchor="row-stackqueue-java"
%}
<p><a href="#row-stackqueue-java">Back to matched row</a></p>

{% capture challenge_tree %}Binary tree traversal example (Java){% endcapture %}
{% capture code_tree %}
public class TreeDemo {
	static class Node { int v; Node l, r; Node(int v){ this.v = v; } }
	static void inorder(Node n, StringBuilder sb){ if(n==null) return; inorder(n.l, sb); sb.append(n.v).append(' '); inorder(n.r, sb); }
	public static String run(){
		Node root = new Node(2); root.l = new Node(1); root.r = new Node(3);
		StringBuilder sb = new StringBuilder(); inorder(root, sb); return sb.toString();
	}
	public static void main(String[] args) { System.out.println(run()); }
}
TreeDemo.main(null);
{% endcapture %}

{% capture out_tree %}1 2 3 {% endcapture %}
{% include code-runner.html
	runner_id="requirements-tree-java"
	language="java"
	challenge=challenge_tree
	code=code_tree
	output=out_tree
	row_anchor="row-tree-java"
%}
<p><a href="#row-tree-java">Back to matched row</a></p>

{% capture challenge_graph %}Graph BFS example (Java){% endcapture %}
{% capture code_graph %}
public class GraphDemo {
	static String bfs(java.util.List<java.util.List<Integer>> g, int s){
		StringBuilder sb = new StringBuilder();
		java.util.Queue<Integer> q = new java.util.ArrayDeque<>();
		boolean[] vis = new boolean[g.size()];
		q.add(s); vis[s]=true;
		while(!q.isEmpty()){ int u=q.poll(); sb.append(u).append(' '); for(int v: g.get(u)) if(!vis[v]){ vis[v]=true; q.add(v);} }
		return sb.toString();
	}
	public static String run(){
		int n = 5; java.util.List<java.util.List<Integer>> g = new java.util.ArrayList<>();
		for(int i=0;i<n;i++) g.add(new java.util.ArrayList<>());
		g.get(0).add(1); g.get(1).add(2); g.get(1).add(3); g.get(3).add(4);
		return bfs(g,0);
	}
	public static void main(String[] args) { System.out.println(run()); }
}
GraphDemo.main(null);
{% endcapture %}

{% capture out_graph %}0 1 2 3 4 {% endcapture %}
{% include code-runner.html
	runner_id="requirements-graph-java"
	language="java"
	challenge=challenge_graph
	code=code_graph
	output=out_graph
	row_anchor="row-graph-java"
%}
<p><a href="#row-graph-java">Back to matched row</a></p>

{% capture challenge_algo %}Algorithm timing: linear vs binary search (Java){% endcapture %}
{% capture code_algo %}
public class AlgoAnalysisDemo {
	static int linear(int[] a,int t){ for(int i=0;i<a.length;i++) if(a[i]==t) return i; return -1; }
	static int binary(int[] a,int t){ int l=0,r=a.length-1; while(l<=r){ int m=(l+r)/2; if(a[m]==t) return m; if(a[m]<t) l=m+1; else r=m-1; } return -1; }
	public static String run(){
		int n = 200000; int[] a = new int[n]; for(int i=0;i<n;i++) a[i]=i;
		int target = n-1;
		long t1 = System.nanoTime(); linear(a,target); long d1 = System.nanoTime()-t1;
		long t2 = System.nanoTime(); binary(a,target); long d2 = System.nanoTime()-t2;
		return "linear(ns):"+d1+" binary(ns):"+d2;
	}
	public static void main(String[] args) { System.out.println(run()); }
}
AlgoAnalysisDemo.main(null);
{% endcapture %}

{% capture out_algo %}linear(ns):<runtime> binary(ns):<runtime> (values vary by machine){% endcapture %}
{% include code-runner.html
	runner_id="requirements-algo-java"
	language="java"
	challenge=challenge_algo
	code=code_algo
	output=out_algo
	row_anchor="row-algo-java"
%}
<p><a href="#row-algo-java">Back to matched row</a></p>

<script>
(function() {
	const runnerOutputs = {
		"requirements-search-java": {{ out_search | jsonify }},
		"requirements-sort-java": {{ out_sort | jsonify }},
		"requirements-hash-java": {{ out_hash | jsonify }},
		"requirements-list-java": {{ out_lists | jsonify }},
		"requirements-set-java": {{ out_sets | jsonify }},
		"requirements-stackqueue-java": {{ out_stackqueue | jsonify }},
		"requirements-tree-java": {{ out_tree | jsonify }},
		"requirements-graph-java": {{ out_graph | jsonify }},
		"requirements-algo-java": {{ out_algo | jsonify }}
	};

	// Attach expected outputs to each runner container as a data attribute.
	// Do NOT populate the visible output; only use these as run-time fallbacks.
	Object.entries(runnerOutputs).forEach(([runnerId, output]) => {
		const container = document.getElementById(`runner-${runnerId}`);
		if (!container) return;
		try {
			container.dataset.expectedOutput = typeof output === 'string' ? output : JSON.stringify(output);
		} catch (e) {
			container.dataset.expectedOutput = '';
		}
	});
})();
</script>

## Customer Interactions summary
**age 40-50+** (our parents/mort): People were confused at the begining of what to do/buttons to press, so we added the notification system with arrows/instructions

**age 20-30 (our main demographic)** (nora siblings/friends): They understood how to play but didn't know to click the npc multiple times for tasks, so we added more detailed instructions to make it clearer

**age <20** (people from CSA/friends who don't play games): People from CSA were quick to get the game, those who weren't as into video games struggled but understood the games through the notification system!

<!-- Page-local runner override: call local runner endpoints to avoid CORS/host detection issues. -->
<script>
// Only run on this page
(function(){
	function getCodeFromContainer(container){
		// Try CodeMirror instance first
		try{
			const cmEl = container.querySelector('.CodeMirror');
			if(cmEl && cmEl.CodeMirror && typeof cmEl.CodeMirror.getValue === 'function'){
				return cmEl.CodeMirror.getValue();
			}
			// Some setups expose the instance as window.CodeMirror ? try dataset
		}catch(e){}
		// Fallback to underlying textarea
		const ta = container.querySelector('.editor-textarea');
		return ta ? ta.value : '';
	}

	function getRunURL(lang){
		if(lang === 'java') return 'http://localhost:8585/run/java';
		if(lang === 'python') return 'http://localhost:8587/run/python';
		if(lang === 'javascript') return 'http://localhost:8587/run/javascript';
		return null;
	}

	document.querySelectorAll('.code-runner-container').forEach(container => {
		const runBtn = container.querySelector('.runBtn');
		if(!runBtn) return;

		// replace onclick to bypass module-scoped handler on this page
		runBtn.__originalOnclick = runBtn.onclick;
		runBtn.onclick = async function(e){
			e.preventDefault();
			const lang = (container.querySelector('.languageSelect') || {}).value || 'java';
			const code = getCodeFromContainer(container);
			const outDiv = container.querySelector('.output-content');
			const execSpan = container.querySelector('.execTime');
			outDiv.textContent = '⏳ Running (local override)...';
			execSpan.textContent = '';

			// local JS fallback: run in page (safe-ish for demos)
			if(lang === 'javascript'){
				try{
					const start = Date.now();
					const logs = [];
					const origLog = console.log;
					console.log = (...args) => { logs.push(args.join(' ')); origLog.apply(console, args); };
					// eslint-disable-next-line no-eval
					eval(code);
					console.log = origLog;
					outDiv.textContent = logs.join('\n')_ || '[no output]';
					execSpan.textContent = `⏱Execution time: ${Date.now()-start}ms (local)`;
				}catch(err){ outDiv.textContent = 'Error: '+err.message; execSpan.textContent=''; }
				return;
			}

			const url = getRunURL(lang);
			if(!url){ outDiv.textContent = 'No runner configured for language: '+lang; return; }

			try{
				const start = Date.now();
				const res = await fetch(url, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json', 'X-Origin':'client' },
					body: JSON.stringify({ code })
				});

				if(!res.ok){
					outDiv.textContent = `Runner responded ${res.status} ${res.statusText}`;
					execSpan.textContent = '';
					return;
				}

				const data = await res.json();
				const output = data.output || JSON.stringify(data);
				outDiv.textContent = output;
				execSpan.textContent = `⏱Execution time: ${Date.now()-start}ms`;
			}catch(err){
				outDiv.textContent = 'Fetch error: '+err.message + ' — check backend and CORS.';
				execSpan.textContent = '';
			}
		};
	});
})();
</script>