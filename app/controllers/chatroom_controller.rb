class ChatroomController < ApplicationController
    def index
        @messages = Message.custom_display
        @message = Message.new
    end
end