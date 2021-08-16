apiVersion: apps / v1
kind: Deployment
metadata:
name: dotnet - app - deployment - master
namespace: kubernetes - cluster - devanshugoyal
labels:
app: dotnet - app - master
spec:
replicas: 4
selector:
matchLabels:
app: dotnet - app - master
template:
metadata:
labels:
app: dotnet - app - master
spec:
containers:
- name: dotnet - app - master
image: devanshu123 / devanshugoyal - master: latest
ports:
-  name: http
containerPort: 80
protocol: TCP
---
  apiVersion: v1
kind: Service
metadata:
name: dotnet - app - develop
namespace: kubernetes - cluster - devanshugoyal
spec:
type: NodePort
selector:
app: dotnet - app - develop
ports:
- protocol: TCP
nodePort: 30157
port: 80
targetPort: 80
