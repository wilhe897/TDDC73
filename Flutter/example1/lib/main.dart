import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Example1'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(widget.title),
        ),
        body: ListView(
          children: [
            Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  Container(
                      width: 250,
                      height: 250,
                      margin: const EdgeInsets.only(top: 20),
                      child: Image.network('https://picsum.photos/250')),
                  const Padding(padding: EdgeInsets.only(top: 50)),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: [
                      TextButton(
                        style: TextButton.styleFrom(
                            textStyle: const TextStyle(fontSize: 20),
                            backgroundColor: Colors.black),
                        onPressed: () {},
                        child: const Text('Button'),
                      ),
                      TextButton(
                        style: TextButton.styleFrom(
                            textStyle: const TextStyle(fontSize: 20),
                            backgroundColor: Colors.black),
                        onPressed: () {},
                        child: const Text('Button'),
                      ),
                    ],
                  ),
                  const Padding(padding: EdgeInsets.only(top: 25)),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: [
                      TextButton(
                        style: TextButton.styleFrom(
                            textStyle: const TextStyle(fontSize: 20),
                            backgroundColor: Colors.black),
                        onPressed: () {},
                        child: const Text('Button'),
                      ),
                      TextButton(
                        style: TextButton.styleFrom(
                            textStyle: const TextStyle(fontSize: 20),
                            backgroundColor: Colors.black),
                        onPressed: () {},
                        child: const Text('Button'),
                      ),
                    ],
                  ),
                  const Padding(padding: EdgeInsets.only(top: 50)),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: const [
                      Text('Email'),
                      SizedBox(
                          width: 250,
                          child: TextField(
                              obscureText: false,
                              decoration: InputDecoration()))
                    ],
                  )
                ],
              ),
            ),
          ],
        ));
  }
}
