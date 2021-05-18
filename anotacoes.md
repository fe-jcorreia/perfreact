# Quando um component utiliza uma nova renderização?

# Pai para filho
```tsx 
<Pai>
    <Filho />
</Pai>
```

# Propriedade
```tsx 
<Pai>
    <Filho title="" />
</Pai>
```

# Hooks (useState, useContext, useReducer)
```tsx 
function Component() {
    const [estado, setEstado] = useState();
}
```

# Fluxo de renderização

1. Gerar uma nova versão do componente que precisa ser renderizado
2. Comparar essa nova versão com a versão anterior já salva na página
3. Se houverem alterações, o React renderiza a nova versão em tela através do algoritmo de reconciliação capaz de verificar as alterações e mudar apenas o necessário

# =========================================================================================

