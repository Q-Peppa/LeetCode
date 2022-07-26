function maxValue(a, b)
    return a > b and a or b
end

tab1 = { key1 = "val1", key2 = "val2", "val1233" }

for k, v in inpairs(tab1) do
    print(k .. "=" .. v)
end
