ESX = nil

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

RegisterCommand('guide', function(source, args, rawCommand)
    if (source > 0) then
        TriggerClientEvent('siir_serverGuide:openGuide', source, true)
    end
end, false)