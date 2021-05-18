RegisterNetEvent('siir_serverGuide:openGuide')
AddEventHandler('siir_serverGuide:openGuide', function(enable)
    SetNuiFocus(enable, enable)

    SendNUIMessage({
        message = "enableui",
    })
end)

RegisterNUICallback('close', function(data, cb)
    SetNuiFocus(enable, enable)

    SendNUIMessage({
        message = "closeui",
    })
    cb('ok')
end)

RegisterNUICallback('keybinds', function(data, cb)
    SendNUIMessage({
        message = "keybinds",
    })
    cb('ok')
end)